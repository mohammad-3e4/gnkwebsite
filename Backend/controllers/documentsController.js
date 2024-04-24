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
exports.getDocumentsByType = catchAsyncErrors(async (req, res, next) => {
  const docType = req.params.docType;
  console.log(docType);
  try {
    const query = `SELECT * FROM ${docType}`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching documents" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No documents found" });
      }
      res.status(200).json({ documents: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
exports.deleteDocumentByTypeAndId = catchAsyncErrors(async (req, res, next) => {
  const docType = req.params.docType;
  const docID = req.params.docID;
 console.log("from",docType);
  try {
    const query = `DELETE FROM ${docType} WHERE id = ?`;
  console.log(query);
    db.query(query, [docID], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error deleting document" });
      }

      // Check if any rows were affected by the delete operation
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Document not found" });
      }

      // Document deleted successfully
      res.status(200).json({ message: "Document deleted successfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

exports.getResult = catchAsyncErrors(async (req, res, next) => {
  // const docType = req.params.docType;
  // console.log(docType);
  try {
    const query = `SELECT * FROM result`;

    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching result" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No result found" });
      }
      res.status(200).json({ result: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

exports.getRecruitmentResult = catchAsyncErrors(async (req, res, next) => {

  try {
    const query = `SELECT * FROM recuitment`;

    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching result" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No result found" });
      }
      res.status(200).json({ result: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});