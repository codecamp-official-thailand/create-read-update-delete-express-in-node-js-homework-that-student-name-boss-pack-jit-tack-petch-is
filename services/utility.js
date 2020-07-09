let id = 1;

const uniqueId = () => {
    return id++;
};

module.exports = {
    uniqueId
};