const City = require('../models/citymodel');

exports.test = function (req, res) { City.find
    res.send('Greetings from the Test controller!');
};