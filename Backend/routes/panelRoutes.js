const experss = require("express");
const router = experss.Router();

const { isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {
  getListOfFaculties,
  deleteFacultyByID,
  salariesOfFaculties,
  setSalariesOfFaculties,
  facultiesJoining,
  deleteFacultySalaryByID,
  addEntryOfPTA,
  getEntriesOfPTA,
  deleteEntriesOfPTA,
  updateFaculty,
  addEntryOfSMC, getEntriesOfSMC, deleteEntriesOfSMC
} = require("../controllers/panelController");

router.get("/panel/faculties", getListOfFaculties);
router
  .route("/panel/salaries")
  .get(salariesOfFaculties)
  .post(setSalariesOfFaculties);
router
  .route("/panel/joining")
  .post(facultiesJoining);
router.route("/panel/faculties/:id").delete(deleteFacultyByID).post(updateFaculty);
router.delete("/panel/salaries/:id", deleteFacultySalaryByID);
router.post('/panel/entry-of-pta',addEntryOfPTA)
router.get('/panel/entries',getEntriesOfPTA)
router.delete('/panel/entries/:id',deleteEntriesOfPTA)
router.post('/panel/entry-of-smc',addEntryOfSMC)
router.get('/panel/entries/smc',getEntriesOfSMC)
router.delete('/panel/entries/smc/:id',deleteEntriesOfSMC)

module.exports = router;
