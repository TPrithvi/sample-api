// eslint-disable-next-line no-unused-vars
var helloWorld = function () {
    this.hello = function (req, res, next) {
        return res.status(200).send('hello');
    }
}

module.exports = new helloWorld();