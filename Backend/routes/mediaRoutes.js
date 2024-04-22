const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {uploadCarousel, getCarousels, getHighlights, getGalleryImages} = require("../controllers/mediaController");

router.post("/upload/carousel", uploadCarousel);
router.get("/carousels", getCarousels);
router.get("/gallery", getGalleryImages);
router.get("/highlights", getHighlights);


module.exports = router;
