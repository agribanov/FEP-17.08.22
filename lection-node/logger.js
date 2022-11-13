const cow = require('cowsay');

function log(msg) {
    console.log(
        cow.say({
            text: msg,
        })
    );
}

module.exports = {
    log: log,
};
