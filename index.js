const express = require("express");
const app = express();
const numberRoutes = require("./routes/number");
const messageRoutes = require("./routes/message");
const studentRoutes = require("./routes/student");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/numbers", numberRoutes);
app.use("/messages", messageRoutes);
app.use("/students", studentRoutes);

app.listen(8000, () => {
    console.log("Server is running");
});