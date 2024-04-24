const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {  uploadDocuments, getDocumentsByType ,getResult,getRecruitmentResult, deleteDocumentByTypeAndId} = require("../controllers/documentsController");

router.post("/upload/certificates", uploadDocuments);
router.get("/:docType", getDocumentsByType);
router.delete("/:docType/:docID", deleteDocumentByTypeAndId);
router.get("/result", getResult);
router.get("/recuitment", getRecruitmentResult);

module.exports = router;
