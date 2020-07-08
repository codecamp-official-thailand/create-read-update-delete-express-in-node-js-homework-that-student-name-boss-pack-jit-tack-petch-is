const express = require("express");
const router = express.Router();
const { addMessage, devideMessage, multiplyMessage } = require("../controllers/message");

router.get("/multiply", multiplyMessage);
router.get("/devide", devideMessage);
router.get("/add", addMessage);
router.get("/add/:a", (req, res) => {
    const { a } = req.params;
    res.send(a);
});
router.get("/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(a + b);
});

module.exports = router;