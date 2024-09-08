const express = require("express");
const {addstudent, allstudent} = require("../controller/student");
const {addfaculty, allfaculty} = require("../controller/faculty");
const {addmanagement, allmanagement} = require("../controller/management");



const router = express.Router();


// router.post("/student", addstudent);
// all student
router.get("/allStudents", allstudent);
// all faculty
router.get("/allFaculties", allfaculty);
// router.post("/faculty", addfaculty);

// router.post("/management", addmanagement);
// all management
router.get("/allManagement", allmanagement);


module.exports = router;
