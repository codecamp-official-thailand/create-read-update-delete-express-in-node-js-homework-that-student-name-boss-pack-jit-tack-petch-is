const addNumber = (req, res) => {
    const { a, b } = req.query;
    res.status(200).send(String(Number(a) + Number(b)));
};

const subtractNumber = (req, res) => {
    const { a, b } = req.query;
    res.status(200).send(String(Number(a) - Number(b)));
};

const multiplyNumber = (req, res) => {
    const { a, b } = req.query;
    res.status(200).send(String(Number(a) * Number(b)));
};

const devideNumber = (req, res) => {
    const { a, b } = req.query;
    res.status(200).send(String(Number(a) / Number(b)));
};

module.exports = {
    addNumber,
    subtractNumber,
    multiplyNumber,
    devideNumber
};