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
    const [rows, fields] = await db.promise().query(
      "SELECT *, DATE_FORMAT(date_of_birth, '%m/%d/%Y') AS date_of_birth, DATE_FORMAT(date_of_appointment, '%m/%d/%Y') AS date_of_appointment,DATE_FORMAT(date_of_retirement, '%m/%d/%Y') AS date_of_retirement FROM faculty_joining"
    );
    res.json({ faculties:rows});
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});
exports.salariesOfFaculties = catchAsyncErrors (async (req, res) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT *  FROM faculty_salary");
    res.json({salaries:rows});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
})

exports.deleteFacultyByID = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await db.promise().query(`DELETE FROM faculty_joining WHERE id=${id}`);
    console.log(`Deleted record with ID ${id}`);
    res.status(200).send(`Record with ID ${id} deleted successfully.`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while deleting the record.");
  }
});
