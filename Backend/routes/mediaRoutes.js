const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const { uploadCarousel, getCarousels, getHighlights, getGalleryImages, getVideos, uploadVideo, uploadGalleryImage,deleteDocumentByTypeAndId
    ,getNews,uploadhighlight,getFirstActivity,getOneActivity,uploadActivityImage} = require("../controllers/mediaController");
   

router.post("/upload/carousel", uploadCarousel);
router.get("/carousels", getCarousels);
router.get("/gallery", getGalleryImages);
router.get("/highlights", getHighlights);

router.get("/videos", getVideos);
router.post("/uploadvideo", uploadVideo);
router.delete("/deletegalleryimage/:id", deleteDocumentByTypeAndId);
router.get("/news", getNews);
router.post("/addhighlight", uploadhighlight);
router.get("/firstactivity", getFirstActivity);
router.get("/oneactivity/:activityName", getOneActivity);
router.post("/uploadactivity", uploadActivityImage);
module.exports = router;
