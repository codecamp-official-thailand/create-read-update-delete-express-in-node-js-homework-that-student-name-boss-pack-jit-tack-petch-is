const { uniqueId } = require("../services/utility");
const { all } = require("../routes/number");

let students = [];

const addStudent = (req, res) => {
    const { name, age, color } = req.body;
    const newStudent = {
        id: uniqueId(),
        name,
        age,
        color
    };

    students.push(newStudent);

    res.status(201).send(newStudent);
};

const getStudentById = (req, res) => {
    const targetId = Number(req.params.id);
    const targetStudent = students.find(std => std.id === targetId);
    res.status(200).send(targetStudent);
};

const getStudents = (req, res) => {
    res.status(200).send(students);
};

const updateStudent = (req, res) => {
    const targetId = Number(req.params.id);
    let allInformation = {};
    for (key in req.body) {
        if (key === "name" || key === "age" || key === "color") {
            allInformation[key] = req.body[key];
        }
    }
    const targetStudent = students.find(std => std.id === targetId);
    const targetStudentIdx = students.findIndex(std => std.id === targetId);
    const updatedStudent = {
        ...targetStudent,
        ...allInformation,
    };

    students[targetStudentIdx] = updatedStudent;

    res.status(200).send();
};

const deleteStudent = (req, res) => {
    const targetId = Number(req.params.id);
    students = students.filter(std => std.id !== targetId);
    res.status(204).send();
};

module.exports = {
    addStudent,
    getStudentById,
    getStudents,
    updateStudent,
    deleteStudent
};