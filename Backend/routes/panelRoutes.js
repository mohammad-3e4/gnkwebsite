const experss = require("express");
const router = experss.Router();

const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {getListOfFaculties, deleteFacultyByID, salariesOfFaculties} = require("../controllers/panelController");

router.get("/panel/faculties", getListOfFaculties);
router.get("/panel/salaries", salariesOfFaculties);
router.delete("/panel/faculties:id", deleteFacultyByID);


module.exports = router;
