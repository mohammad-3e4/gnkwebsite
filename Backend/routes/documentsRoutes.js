const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const { uploadDocuments, getDocumentsByType ,getResult,getRecruitmentResult, deleteDocumentByTypeAndId,updateFeeStructure} = require("../controllers/documentsController");

router.post("/upload/certificates", uploadDocuments);
router.get("/:docType", getDocumentsByType);
router.delete("/:docType/:docID", deleteDocumentByTypeAndId);
router.get("/result", getResult);
router.get("/recuitment", getRecruitmentResult);
router.post("/update/fees", updateFeeStructure);



module.exports = router;
