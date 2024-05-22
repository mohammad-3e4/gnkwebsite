const path = require("path");
const fs = require("fs");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const sendToken = require("../utils/jwtToken");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.uploadDocuments = catchAsyncErrors(async (req, res, next) => {
  const docType = req.body.docType;
  const date = req.body.date;
  const description = req.body.description;
  const file = req.files.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const folderPath = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "public",
      "uploads",
      docType
    );

    fs.mkdirSync(folderPath, { recursive: true });

    // Move the uploaded file to the folder
    // const [_, fileType] = file.name.split(".");

    // const fileName = `${studentId}_${documentName}.${fileType}`;
    const filePath = path.join(folderPath, file.name);
    await file.mv(filePath);
    await updateDocumentName(file.name, description, docType, date);

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

function updateDocumentName(fileName, description, docType, date) {
  return new Promise((resolve, reject) => {
    const insertQuery = `INSERT INTO ${docType} (file_name, description, date) VALUES (?, ?, ?)`;
    db.query(insertQuery, [fileName, description, date], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

exports.getListOfFaculties = catchAsyncErrors(async (req, res, next) => {
  try {
    const [rows, fields] = await db
      .promise()
      .query(
        "SELECT *, DATE_FORMAT(date_of_birth, '%m/%d/%Y') AS date_of_birth, DATE_FORMAT(date_of_appointment, '%m/%d/%Y') AS date_of_appointment,DATE_FORMAT(date_of_retirement, '%m/%d/%Y') AS date_of_retirement FROM faculty_joining"
      );
    res.json({ faculties: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});
exports.salariesOfFaculties = catchAsyncErrors(async (req, res) => {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT *  FROM faculty_salary");
    res.json({ salaries: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

exports.setSalariesOfFaculties = catchAsyncErrors(async (req, res) => {
  const { name, designation, qualification, experience, pay_scale, category } =
    req.body;

  try {
    const result = await db
      .promise()
      .query(
        "INSERT INTO faculty_salary (name,designation,qualification,experience,pay_scale,category) VALUES (?, ?,?,?,?,?)",
        [name, designation, qualification, experience, pay_scale, category]
      );
    console.log("Data inserted successfully");
    res.json({ message: "Salary added successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: error.message });
  }
});

exports.deleteFacultyByID = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await db
      .promise()
      .query(`DELETE FROM faculty_joining WHERE id=${id}`);
    console.log(`Deleted record with ID ${id}`);
    res
      .status(200)
      .json({ message: `Record with ID ${id} deleted successfully.` });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the record." });
  }
});

exports.updateFaculty = catchAsyncErrors(async (req, res, next) => {
  const updatedFields = req.body;
  const { id } = req.params;
  const updateFieldsString = Object.keys(updatedFields)
    .map((key) => `${key}="${updatedFields[key]}"`)
    .join(", ");

  const sql = `UPDATE faulty_joining SET ${updateFieldsString} WHERE id = '${Number(
    id
  )}';`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error during update:", err);
      next(new ErrorHandler("Error during update", 500));
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: "Update successful" });
    } else {
      next(new ErrorHandler("User not found or no changes applied", 404));
    }
  });
});

exports.facultiesJoining = catchAsyncErrors(async (req, res) => {
  const {
    name,
    designation,
    qualification,
    date_of_birth,
    date_of_appointment,
    date_of_retirement,
    category,
  } = req.body;

  try {
    const result = await db
      .promise()
      .query(
        "INSERT INTO faculty_joining (name,designation,qualification,date_of_birth,date_of_appointment,date_of_retirement,category) VALUES (?, ?,?,?,?,?,?)",
        [
          name,
          designation,
          qualification,
          date_of_birth,
          date_of_appointment,
          date_of_retirement,
          category,
        ]
      );
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Error inserting data" });
  }
});

exports.deleteFacultySalaryByID = catchAsyncErrors(async (req, res, next) => {
  console.log("HI");
  const { id } = req.params;
  try {
    const result = await db
      .promise()
      .query(`DELETE FROM faculty_salary  WHERE id=${id}`);
    console.log(`Deleted record with ID ${id}`);
    res
      .status(200)
      .json({ message: `Record with ID ${id} deleted successfully.` });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the record." });
  }
});

exports.addEntryOfPTA = catchAsyncErrors(async (req, res, next) => {
  const name = req.body.name;
  const designation = req.body.designation;

  try {
    const result = await db
      .promise()
      .query("INSERT INTO pta (name,designation) VALUES (?, ?)", [
        name,
        designation,
      ]);
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: error.message });
  }
});
exports.getEntriesOfPTA = catchAsyncErrors(async (req, res) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM pta");
    res.status(200).json({ entries: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

exports.deleteEntriesOfPTA = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM pta WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting data" });
    }
    res.json({ message: "Data deleted successfully" });
  });
});
exports.addEntryOfSMC = catchAsyncErrors(async (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const designation = req.body.designation;

  try {
    const result = await db
      .promise()
      .query(
        "INSERT INTO managing_commitee (name, address,designation) VALUES (?, ?, ?)",
        [name, address, designation]
      );
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: error.message });
  }
});

exports.getEntriesOfSMC = catchAsyncErrors(async (req, res) => {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM managing_commitee");
    res.status(200).json({ members: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
exports.deleteEntriesOfSMC = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM managing_commitee WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting data" });
    }
    res.json({ message: "Data deleted successfully" });
  });
});
