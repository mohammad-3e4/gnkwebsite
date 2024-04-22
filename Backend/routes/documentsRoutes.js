const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {  uploadDocuments, getDocumentsByType , deleteDocumentByTypeAndId} = require("../controllers/documentsController");

router.post("/upload/certificates", uploadDocuments);
router.get("/:docType", getDocumentsByType);
router.delete("/:docType/:docID", deleteDocumentByTypeAndId);

module.exports = router;
