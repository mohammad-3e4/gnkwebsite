const express = require('express');
const multer = require('multer');
const { fileURLToPath } = require('url');
const { dirname, join } = require('path');
const cors = require('cors');
const mysql = require('mysql2/promise');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({origin:'*'}));
app.use(express.urlencoded({ extended: true }));

const path = require('path');
const __filename2 = path.resolve();
const __dirname2 = path.dirname(__filename2);


const con =  mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


// **********************************************************Notification***************************************************

// app.post("/addnotification", async (req, res) => {
//     const title = req.body.title;
//     const content = req.body.content;

//     try {
//         const result = await con.promise().query(
//             "INSERT INTO notification (title, content) VALUES (?, ?)",
//             [title, content]
//         );
//         console.log("Notification inserted successfully");
//         res.send("Notification inserted successfully");
//     } catch (error) {
//         console.error("Error in uploading Notification:", error);
//         res.status(500).send("Error in uploading video");
//     }
// });

// // Send data to frontend

// app.get("/api/notification", async (req, res) => {
//     try {
//         const rows = await con.promise().query('SELECT * FROM notification');
//         // console.log("Fetched videos:", rows);
//         res.send(rows);
//     } catch (error) {
//         console.error("Error fetching videos:", error);
//         res.status(500).send("Error fetching videos");
//     }
// });

// // send total status to frontend

// app.get('/api/sum-status', async (req, res) => {
//     try {
//         const [rows] = await con.promise().query('SELECT SUM(status) AS total_status FROM notification');
//         const totalStatus = rows[0].total_status;
//         console.log("sum:", totalStatus);
//         res.json({ totalStatus });
//     } catch (error) {
//         console.error("Error fetching sum of status:", error);
//         res.status(500).send("Error fetching sum of status");
//     }
// });

// // get status from frontend

// app.put('/api/notification/:notification_id', (req, res) => {
//     const { notification_id } = req.params;
//     const { status } = req.body;

//     con.execute(`UPDATE Notification SET status = ? WHERE notification_id = ?`, [status, notification_id], function (err) {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({ message: 'Status updated successfully', changes: this.changes });
//     });
// });

// **********************************************************File Uploding***************************************************
// Multer storage configuration
// const storage1 = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });

// const upload1 = multer({ storage: storage1 });

// // Serve uploaded files
// app.use('/uploads', express.static(join(__dirname2, 'uploads')));

// // POST endpoint to upload a file with description
// app.post('/uploadfile', upload1.single('file'), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send('No files were uploaded.');
//         }

//         const uploadedFile = req.file;
//         const { description } = req.body; // Get description from request body
//         const { date } = req.body; // Get date from request body

//         console.log(uploadedFile.filename);
//         console.log(description);
//         console.log(date);

//         await con.promise().query(`INSERT INTO pdf_files (name, description,date) VALUES (?, ?, ? )`, [uploadedFile.filename, description, date]);

//         console.log("File saved to database.");
//         return res.status(200).send('File uploaded and saved to database.');
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send('Error saving file to database.');
//     }
// });

// **********************************************************Certificate***************************************************
const storage5 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'frontend', 'public', 'uploads','certificate'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload5 = multer({ storage: storage5 });

// Serve uploaded files
app.use(
  "/uploads/certificate",
  express.static(join(__dirname2, "uploads", "certificate"))
);

// POST endpoint to upload a file with optional description and date
app.post("/uploadcertificate", upload5.single("file"), async (req, res) => {
  try {
    let uploadedFile = null;
    if (req.file) {
      uploadedFile = req.file;
      console.log(uploadedFile.filename);
    } else {
      console.log("No file uploaded.");
    }

    const { description, date } = req.body; // Get description and date from request body

    console.log(description);
    console.log(date);

    // Insert into the database, handle file and no file cases separately
    if (uploadedFile) {
      await con.promise().query(
        `INSERT INTO  certificate (file_name, description, date) VALUES (?, ?, ?)`,
        [uploadedFile.filename, description, date]
      );
      console.log("File saved to database.");
      return res.status(200).send("File uploaded and saved to database.");
    } else {
      await con.promise().query(
        `INSERT INTO pdf_files (description, date) VALUES (?, ?)`,
        [description, date]
      );
      console.log("Description and Date saved to database.");
      return res
        .status(200)
        .send("No file uploaded, but description and date saved to database.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/certificate", async (req, res) => {
  try {
    // const [rows, fields] = await con.promise().query('SELECT * FROM pdf_files');
    const [rows, fields] = await con.promise().query(
      "SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date FROM certificate"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// **********************************************************News & Updates***************************************************
const storage6 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'frontend', 'public', 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload6 = multer({ storage: storage6 });

// Serve uploaded files
app.use("/uploads", express.static(join(__dirname2, "uploads")));

// POST endpoint to upload a file with optional description and date
app.post("/uploadfile", upload6.single("file"), async (req, res) => {
  try {
    let uploadedFile = null;
    if (req.file) {
      uploadedFile = req.file;
      console.log(uploadedFile.filename);
    } else {
      console.log("No file uploaded.");
    }

    const { description, date } = req.body; // Get description and date from request body

    console.log(description);
    console.log(date);

    // Insert into the database, handle file and no file cases separately
    if (uploadedFile) {
      await con.promise().query(
        `INSERT INTO news (name, description, date) VALUES (?, ?, ?)`,
        [uploadedFile.filename, description, date]
      );
      console.log("File saved to database.");
      return res.status(200).send("File uploaded and saved to database.");
    } else {
      await con.promise().query(`INSERT INTO news (description, date) VALUES (?, ?)`, [
        description,
        date,
      ]);
      console.log("Description and Date saved to database.");
      return res
        .status(200)
        .send("No file uploaded, but description and date saved to database.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/files", async (req, res) => {
  try {
    // const [rows, fields] = await con.promise().query('SELECT * FROM pdf_files');
    const [rows, fields] = await con.promise().query(
      "SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date FROM news"
    );

    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// **********************************************************Image Uploding to Gallery***************************************************

// Multer storage configuration
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, path.join(__dirname, 'frontend', 'public', 'uploads', 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
});

const upload2 = multer({ storage: storage2 });

// Serve uploaded files
app.use(
  "/uploads/images",
  express.static(join(__dirname2, "uploads", "images"))
);

// POST endpoint to upload a file with description
app.post("/uploadimage", upload2.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadedFile = req.file;

    console.log(uploadedFile.filename);

    await con.promise().query(`INSERT INTO images (Name) VALUES (?)`, [
      uploadedFile.filename,
    ]);

    console.log("File saved to database.");
    return res.status(200).send("File uploaded and saved to database.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/images", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query("SELECT * FROM images");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// **********************************************************Image Uploding to Activity***************************************************

const storage3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'frontend', 'public', 'uploads', 'activity'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload3 = multer({ storage: storage3 });

app.use(express.json());

app.post("/uploadactivity", upload3.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadedFile = req.file;
    const activityName = req.body.activity;

    console.log("Uploaded File:", uploadedFile.filename);
    console.log("Activity Name:", activityName);

    await con.promise().query(`INSERT INTO activity (Name, Activity) VALUES (?, ?)`, [
      uploadedFile.filename,
      activityName,
    ]);

    console.log("File saved to database.");
    return res.status(200).send("File uploaded and saved to database.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/:activity", async (req, res) => {
  const { activity } = req.params;
  try {
    const [rows, fields] = await con.promise().query(
      `SELECT * FROM activity WHERE activity = "${activity}";`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// **********************************************************Video Uploding***************************************************

app.post("/video", async (req, res) => {
  const videolink = req.body.videolink;
  const videotitle = req.body.videotitle;

  try {
    const result = await con.promise().query(
      "INSERT INTO videos (videolink, videotitle) VALUES (?, ?)",
      [videolink, videotitle]
    );
    console.log("Video inserted successfully");
    res.send("Video inserted successfully");
  } catch (error) {
    console.error("Error inserting video:", error);
    res.status(500).send("Error inserting video");
  }
});

app.get("/api/showvideo", async (req, res) => {
  try {
    const rows = await con.promise().query("SELECT * FROM videos");
    // console.log("Fetched videos:", rows);
    res.send(rows);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).send("Error fetching videos");
  }
});

// **********************************************************Sign Up***************************************************

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const result = await con.promise().query(
      "INSERT INTO admintable (email, password) VALUES (?, ?)",
      [email, password]
    );
    console.log("Sign-In successfully");
  } catch (error) {
    console.error("Error inserting video:", error);
  }
});

// **********************************************************Log In***************************************************

app.get("/api/login", async (req, res) => {
  try {
    const rows = await con.promise().query("SELECT * FROM admintable");
    res.send(rows);
  } catch (error) {
    console.error("Error fetching data from admintable:", error);
    res.status(500).send("Error fetching data from admintable");
  }
});

// **********************************************************Hightlight***************************************************

app.post("/addhighlight", async (req, res) => {
  const content = req.body.content;
  try {
    const result = await con.promise().query(
      "UPDATE highlight SET content = ? WHERE id = ?",
      [content, 1]
    );

    console.log("Sign-In successfully");
  } catch (error) {
    console.error("Error inserting video:", error);
  }
});

app.get("/api/highlight", async (req, res) => {
  try {
    const rows = await con.promise().query("SELECT * FROM highlight");
    res.send(rows);
    // console.log(rows)
  } catch (error) {
    console.error("Error fetching data from highlight:", error);
    res.status(500).send("Error fetching data from highlight");
  }
});
// ****************************************************************** Result ******************************************************
const storage4 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'frontend', 'public', 'uploads', 'result'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload4 = multer({ storage: storage4 });

// Serve uploaded files
app.use(
  "/uploads/result",
  express.static(join(__dirname2, "uploads", "result"))
);
// POST endpoint to upload a file with optional description and date
app.post("/uploadresult", upload4.single("file"), async (req, res) => {
  try {
    let uploadedFile = null;
    if (req.file) {
      uploadedFile = req.file;
      console.log(uploadedFile.filename);
    } else {
      console.log("No file uploaded.");
    }

    const { description, date } = req.body; // Get description and date from request body

    console.log(description);
    console.log(date);

    // Insert into the database, handle file and no file cases separately
    if (uploadedFile) {
      await con.promise().query(
        `INSERT INTO result (file_name, description, date) VALUES (?, ?, ?)`,
        [uploadedFile.filename, description, date]
      );
      console.log("File saved to database.");
      return res.status(200).send("File uploaded and saved to database.");
    } else {
      await con.promise().query(
        `INSERT INTO pdf_files (description, date) VALUES (?, ?)`,
        [description, date]
      );
      console.log("Description and Date saved to database.");
      return res
        .status(200)
        .send("No file uploaded, but description and date saved to database.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/api/result", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query(
      "SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date FROM result"
    );
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// ****************************************************************** Admission form ******************************************************
const storage7 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/admissionform");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload7 = multer({ storage: storage7 });

// Serve uploaded files
app.use(
  "/uploads/admissionform",
  express.static(join(__dirname2, "uploads", "admissionform"))
);
// POST endpoint to upload a file with optional description and date
app.post("/uploadform", upload7.single("file"), async (req, res) => {
  try {
    let uploadedFile = null;
    if (req.file) {
      uploadedFile = req.file;
      console.log(uploadedFile.filename);
    } else {
      console.log("No file uploaded.");
    }

    const { description, date } = req.body; // Get description and date from request body

    console.log(description);
    console.log(date);

    // Insert into the database, handle file and no file cases separately
    if (uploadedFile) {
      await con.promise().query(
        `INSERT INTO admissionform (file_name, description, date) VALUES (?, ?, ?)`,
        [uploadedFile.filename, description, date]
      );
      console.log("File saved to database.");
      return res.status(200).send("File uploaded and saved to database.");
    } else {
      await con.promise().query(
        `INSERT INTO admissionform (description, date) VALUES (?, ?)`,
        [description, date]
      );
      console.log("Description and Date saved to database.");
      return res
        .status(200)
        .send("No file uploaded, but description and date saved to database.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/api/form", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query(
      "SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date FROM admissionform"
    );
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// ****************************************************************** Managing Commitee ******************************************************

app.post("/api/addsmc", async (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const designation = req.body.designation;

  try {
    const result = await con.promise().query(
      "INSERT INTO managing_commitee (name, address,designation) VALUES (?, ?, ?)",
      [name, address, designation]
    );
    console.log("Data inserted successfully");
    res.send("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/api/managingcommitee", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query("SELECT * FROM managing_commitee");
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

app.delete("/api/managingcommitee/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM managing_commitee WHERE id = ?";
  con.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting data" });
    }
    res.json({ message: "Data deleted successfully" });
  });
});

// ****************************************************************** PTA ******************************************************

app.post("/api/addpta", async (req, res) => {
  const name = req.body.name;
  const designation = req.body.designation;

  try {
    const result = await con.promise().query(
      "INSERT INTO pta (name,designation) VALUES (?, ?)",
      [name, designation]
    );
    console.log("Data inserted successfully");
    res.send("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/api/pta", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query("SELECT * FROM pta");
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

app.delete("/api/pta/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM pta WHERE id = ?";
  con.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting data" });
    }
    res.json({ message: "Data deleted successfully" });
  });
});

// ****************************************************************** Carousel ******************************************************
app.post("/uploadcarousel", upload7.single("file"), async (req, res) => {
  try {
    let uploadedFile = null;
    if (req.file) {
      uploadedFile = req.file;
      console.log(uploadedFile.filename);
    } else {
      console.log("No file uploaded.");
    }

    const { slide } = req.body; // Get description and date from request body

    console.log(slide);

    // Check if slide already exists in the database
    const [existingSlide] = await con.promise().query(
      `SELECT * FROM carousel WHERE slide = ?`,
      [slide]
    );

    if (existingSlide.length > 0) {
      // If slide exists, update the file_name for that slide
      await con.promise().query(`UPDATE carousel SET file_name = ? WHERE slide = ?`, [
        uploadedFile.filename,
        slide,
      ]);
      console.log("File name updated in database.");
      return res
        .status(200)
        .send("File uploaded and file name updated in database.");
    } else {
      // If slide does not exist, insert a new record
      await con.promise().query(
        `INSERT INTO carousel (slide, file_name) VALUES (?, ?)`,
        [slide, uploadedFile.filename]
      );
      console.log("File saved to database.");
      return res.status(200).send("File uploaded and saved to database.");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error saving file to database.");
  }
});

app.get("/api/carousel", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query("SELECT *  FROM carousel");
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ****************************************************************** Admin News ******************************************************

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM news WHERE news_id = ?";
  con.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting news" });
    }
    res.json({ message: "News deleted successfully" });
  });
});

// ****************************************************************** Admin Admission Form ******************************************************

app.delete("/api/form/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM admissionform WHERE id = ?";
  con.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting form" });
    }
    res.json({ message: "Form deleted successfully" });
  });
});

// ****************************************************************** Admin Gallery ******************************************************

app.delete("/images/:name", (req, res) => {
  const { name } = req.params;
  const sql = "DELETE FROM images WHERE Name = ?";
  con.query(sql, name, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting image" });
    }
    res.json({ message: "Image deleted successfully" });
  });
});

// ****************************************************************** Admin Video ******************************************************

app.delete("/api/showvideo/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const sql = "DELETE FROM videos WHERE id=?";

  con.query(sql, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting video" });
    }
    res.json({ message: "Video deleted successfully" });
  });
});

// ****************************************************************** Admin Gallery ******************************************************

app.delete("/activity/:name", (req, res) => {
  const { name } = req.params;
  const sql = "DELETE FROM activity WHERE Name = ?";
  con.query(sql, name, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting image" });
    }
    res.json({ message: "Image deleted successfully" });
  });
});

// ****************************************************************** Faculty Salary ******************************************************

app.post("/api/salary", async (req, res) => {
  const { name, designation, qualification, experience, pay_scale, category } =
    req.body;

  try {
    const result = await con.promise().query(
      "INSERT INTO faculty_salary (name,designation,qualification,experience,pay_scale,category) VALUES (?, ?,?,?,?,?)",
      [name, designation, qualification, experience, pay_scale, category]
    );
    console.log("Data inserted successfully");
    res.send("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/api/salary", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query("SELECT *  FROM faculty_salary");
    res.json({salaries:rows});
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

app.delete("/api/salary/:id", async (req, res) => {
  const { id } = req.params;
  await con.promise().query(`Delete FROM faculty_salary WHERE id=${id}`);
  if (err) {
    console.log(err);
  }
  console.log("Data Deleted Sucessfully");
  // console.log(`${id}`);
});
// ****************************************************************** Faculty Joining ******************************************************

app.post("/api/joining", async (req, res) => {
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
    const result = await con.promise().query(
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
    res.send("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.get("/api/joining", async (req, res) => {
  try {
    const [rows, fields] = await con.promise().query(
      "SELECT *, DATE_FORMAT(date_of_birth, '%m/%d/%Y') AS date_of_birth, DATE_FORMAT(date_of_appointment, '%m/%d/%Y') AS date_of_appointment,DATE_FORMAT(date_of_retirement, '%m/%d/%Y') AS date_of_retirement FROM faculty_joining"
    );
    res.json(rows);
    // console.log(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching files from database.");
  }
});

app.delete("/api/joining/:id", async (req, res) => {
  const { id } = req.params;
  await con.promise().query(`Delete FROM faculty_joining WHERE id=${id}`);
  if (err) {
    console.log(err);
  }
  // console.log(`${id}`);
});

app.get('/homer', (req, res)=>{
  res.send('Hello world')
})