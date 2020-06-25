const State = require('../models/statemodel');

exports.test = function (req, res) { State.find
    res.send('Greetings from the Test controller!');
};