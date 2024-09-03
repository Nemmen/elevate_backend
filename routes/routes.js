const express = require("express");
const {addstudent} = require("../controller/student");
const {addfaculty} = require("../controller/faculty");
const {addmanagement} = require("../controller/management");



const router = express.Router();


router.post("/student", addstudent);
router.post("/faculty", addfaculty);
router.post("/management", addmanagement);


module.exports = router;
