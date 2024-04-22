const path = require("path");
const fs = require("fs");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const sendToken = require("../utils/jwtToken");
const asyncHandler = require("express-async-handler");
const db = require("../config/database");

exports.uploadCarousel = catchAsyncErrors(async (req, res, next) => {
  const slide = req.body.slide;
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
      "carousel",
    );

    fs.mkdirSync(folderPath, { recursive: true });
    const filePath = path.join(folderPath, file.name);
    await file.mv(filePath);
    await uploadCarousel(slide, file.name);

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

exports.getHighlights = catchAsyncErrors(async (req, res) => {
  try {
    const rows = await db.promise().query("SELECT * FROM highlight");
    res.send(rows);
    // console.log(rows)
  } catch (error) {
    console.error("Error fetching data from highlight:", error);
    res.status(500).send("Error fetching data from highlight");
  }
});
async function uploadCarousel(slide, fileName) {
  try {
    // Check if slide already exists in the database
    const [existingSlide] = await db
      .promise()
      .query(`SELECT * FROM carousel WHERE slide = ?`, [slide]);

    if (existingSlide.length > 0) {
      // If slide exists, update the file_name for that slide
      await db
        .promise()
        .query(`UPDATE carousel SET file_name = ? WHERE slide = ?`, [
          fileName,
          slide,
        ]);
      console.log("File name updated in database.");
      return "File uploaded and file name updated in database.";
    } else {
      // If slide does not exist, insert a new record
      await db
        .promise()
        .query(`INSERT INTO carousel (slide, file_name) VALUES (?, ?)`, [
          slide,
          fileName,
        ]);
      console.log("File saved to database.");
      return "File uploaded and saved to database.";
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error saving file to database.");
  }
}

// Usage in Express route handle
exports.getCarousels = catchAsyncErrors(async (req, res, next) => {

  try {
    const query = `SELECT * FROM carousel;`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching carousels" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No carousels found" });
      }
      res.status(200).json({ slides: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
exports.getGalleryImages = catchAsyncErrors(async (req, res, next) => {

  try {
    const query = `SELECT * FROM images;`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching carousels" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No carousels found" });
      }
      res.status(200).json({ images: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


exports.deleteDocumentByTypeAndId = catchAsyncErrors(async (req, res, next) => {
  const docType = req.params.docType;
  const docID = req.params.docID;
  console.log("JIiii");
  try {
    const query = `DELETE FROM ${docType} WHERE id = ?`;

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
