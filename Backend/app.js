const experss = require("express");
const authRoutes = require("./routes/authRoutes");
const documentsRoutes = require("./routes/documentsRoutes");
const mediaRoutes = require("./routes/mediaRoutes");
const panelRoutes = require("./routes/panelRoutes");
const db = require("./config/database");
const cors = require("cors")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const cookieParser = require("cookie-parser");
const upload = require('express-fileupload')
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = experss();
app.use(experss.json());
app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

app.use(cors("origin", "*"));
// Routes

app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/documents", documentsRoutes);
app.use("/api/v2/media", mediaRoutes);
app.use("/api/v2/admin", panelRoutes);

// Middle wares
app.use(errorMiddleware);

module.exports = app;
