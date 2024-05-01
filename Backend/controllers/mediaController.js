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

exports.getVideos = catchAsyncErrors(async (req, res, next) => {

  try {
    const query = `SELECT * FROM videos;`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching videos" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No video found" });
      }
      res.status(200).json({ videos: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


exports.uploadVideo = catchAsyncErrors(async (req, res, next) => {
  const link = req.body.videolink;
  const title = req.body.videotitle;
  console.log(link,title)
  if (!link) {
    return res.status(400).json({ message: "No video uploaded" });
  }

  try {

        const result = await db.promise().query(
          `INSERT INTO videos (videolink, videotitle) VALUES ('${link}', '${title}')`
        );
        res.status(200).json({ message: "video uploaded successfully" });
      } catch (error) {
        console.error("Error inserting video:", error);
        res.status(500).send("Error inserting video");
      }
});

exports.uploadGalleryImage = catchAsyncErrors(async (req, res, next) => {
  const docType = req.body.docType;
  const file = req.files.file;
  console.log(docType)
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

    const filePath = path.join(folderPath, file.name);
    await file.mv(filePath);
    await updateDocumentName(file.name, docType);

    res.status(200).json({ message: "image uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

function updateDocumentName(fileName,docType) {
  return new Promise((resolve, reject) => {
    const insertQuery = `INSERT INTO ${docType} (file_name) VALUES (?)`;
    db.query(insertQuery, [fileName], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}


// exports.deleteGalleryImage = catchAsyncErrors(async (req, res, next) => {
//   const imageName = req.params.imagename;
//   try {
//     const query = `DELETE FROM images WHERE Name = '${imageName}'`;

//     db.query(query,  (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ error: "Error deleting image" });
//       }

//       // Check if any rows were affected by the delete operation
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "image not found" });
//       }

//       // Document deleted successfully
//       res.status(200).json({ message: "image deleted successfully" });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });
//////////////////////////////////////////////////////////////////

exports.getNews = catchAsyncErrors(async (req, res, next) => {
  try {
    const query = `SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date FROM news`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching news" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No news found" });
      }
      res.status(200).json({ news: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
/////////////////////////////////////////////////////////////////


exports.uploadhighlight = catchAsyncErrors(async (req, res, next) => {
  const content = req.body.content;
  if (!content) {
    return res.status(400).json({ message: "No highlight uploaded" });
  }
  try {

        const result = await db.promise().query(
          `INSERT INTO highlight (content) VALUES ('${content}')`
        );
        res.status(200).json({ message: "highlight uploaded successfully" });
      } catch (error) {
        console.error("Error inserting highlight:", error);
        res.status(500).send("Error inserting highlight");
      }
});

exports.getFirstActivity = catchAsyncErrors(async (req, res, next) => {

  try {
    const query = `SELECT MIN(id) AS id, activity, MIN(file_name) AS file_name 
    FROM activity 
    GROUP BY activity 
    LIMIT 0, 50000;`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching activity" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No activity found" });
      }
      res.status(200).json({ firstactivity: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
exports.getOneActivity = catchAsyncErrors(async (req, res, next) => {
  const activityName=req.params.activityName
  try {
    const query = `SELECT * from activity where activity ='${activityName}';`;

    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Error fetching activity" });
      }

      if (!results || results.length === 0) {
        return res.status(404).json({ message: "No activity found" });
      }
      res.status(200).json({oneactivity: results });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
exports.uploadActivityImage = catchAsyncErrors(async (req, res, next) => {
  const docType = req.body.docType;
  const file = req.files.file;
  const activity = req.body.activity;

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

    const filePath = path.join(folderPath, file.name);
    await file.mv(filePath);
    await updateActivity(file.name, docType,activity);

    res.status(200).json({ message: "image uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
function updateActivity(fileName,docType,activity) {
  return new Promise((resolve, reject) => {
    const insertQuery = `INSERT INTO ${docType} (file_name,activity) VALUES (?,?)`;
    db.query(insertQuery, [fileName,activity], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}


