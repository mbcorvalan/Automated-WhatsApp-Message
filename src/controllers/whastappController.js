const VerfiTocken = (req, res) => {
    res.send('Hello, World!');
};

const ReciveMessage = (req, res) => {
    res.send('Hola Recived');
}

module.exports = {
    VerfiTocken,
    ReciveMessage
};