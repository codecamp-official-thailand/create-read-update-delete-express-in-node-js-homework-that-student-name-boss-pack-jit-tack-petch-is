const students = [];

const addStudent = (req, res) => {
    const { name, age, color } = req.body;
    const newStudent = {
        id: Math.floor(Math.random() * 1000),
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
    
};

const deleteStudent = (req, res) => {

};

module.exports = {
    addStudent,
    getStudentById,
    getStudents,
    updateStudent,
    deleteStudent
};