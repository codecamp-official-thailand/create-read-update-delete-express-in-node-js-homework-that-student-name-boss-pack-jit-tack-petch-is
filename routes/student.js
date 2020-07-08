const express = require("express");
const router = express.Router();
const studentControllers = require("../controllers/student");

// CREATE
router.post("/", studentControllers.addStudent);
// READ ALL
router.get("/", studentControllers.getStudents);
// READ ONE
router.get("/:id", studentControllers.getStudentById);
// UPDATE
router.patch("/:id", studentControllers.updateStudent);
// DELETE
router.delete("/:id", studentControllers.deleteStudent);

module.exports = router;