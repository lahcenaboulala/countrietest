const Countrie = require('../models/countriemodel');

exports.test = function (req, res) { Countrie.find
    res.send('Greetings from the Test controller!');
};