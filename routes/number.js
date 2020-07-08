const express = require("express");
const router = express.Router();
const {
    addNumber,
    subtractNumber,
    multiplyNumber,
    devideNumber
} = require("../controllers/number");

router.get("/add", addNumber);
router.get("/subtract", subtractNumber);
router.get("/multiply", multiplyNumber);
router.get("/devide", devideNumber);

module.exports = router;