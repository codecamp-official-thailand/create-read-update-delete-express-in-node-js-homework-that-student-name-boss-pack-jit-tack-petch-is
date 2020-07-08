const addMessage = (req, res) => {
    const { message1, message2 } = req.query;
    const diffLength = message1.length - message2.length;
    let finalMessage = "";
    if (diffLength === 0 || diffLength === 1) {

        for (let i = 0; i < message1.length; i++) {
            const temp1 = message1[i];
            const temp2 = message2[i] ? message2[i] : "";
            finalMessage += `${temp1}${temp2}`;
        }
        res.status(200).send(finalMessage);

    } else if (diffLength === -1) {

        for (let i = 0; i < message2.length; i++) {
            const temp1 = message2[i];
            const temp2 = message1[i] ? message1[i] : "";
            finalMessage += `${temp1}${temp2}`;
        }
        res.status(200).send(finalMessage);

    } else {

        res.status(400).send("Length Do not match");

    }
};

const devideMessage = (req, res) => {
    const { message, times } = req.query;
    let finalMessage = "";
    for (let i = 1; i <= message.length; i++) {
        if (i % Number(times) === 0) {
            finalMessage += `${message[i - 1]}/`;
        }
        finalMessage += message[i - 1];
    }
    res.status(200).send(finalMessage);
};

const multiplyMessage = (req, res) => {
    const { message, times } = req.query;
    let finalMessage = "";
    for (let i = 0; i < Number(times); i++) {
        finalMessage += message;
    }
    res.status(200).send(finalMessage);
};

module.exports = {
    addMessage,
    devideMessage,
    multiplyMessage
};