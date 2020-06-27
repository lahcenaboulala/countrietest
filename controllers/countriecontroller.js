const Countries = require('../models/countriemodel');
const Joi = require('@hapi/joi');

exports.test = function (req, res) { Countrie.find()
    res.send('Greetings from the Test controller!');
};
exports.getCountry = (req, res) => {
  Countries.findById(req.params.countryId, (err, country) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json(country);
  });
};
exports.getAllCountries = (req, res) => {
  Countries.find({}, (err, country) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json(country);
  });
};

exports.createCountry = (req, res) => {
  const newCountry = new Countries(req.body);

  const { error } = validateBody(req.body)
  if (error) {
      //400 Bad request
      res.status(400).send(error)
      return
  }

  newCountry.save((err, country) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json(country);
  });
};

exports.updateCountry = (req, res) => {
  Countries.findOneAndUpdate({ _id: req.params.countryId }, req.body,
      (err, country) => {
          if (err) {
              res.send(err);
              return;
          }
          res.json(country);
      });
};

exports.deleteCountry = (req, res) => {

  Countries.deleteOne({ _id: req.params.countryId }, (err) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json({
          message: `country ${req.params.countryId} successfully deleted`
      });
  });
};

function validateBody(body) {
  const schema = Joi.object({
      countryName: Joi.string().min(3).required(),
      countryCurrency: Joi.string().min(3).required(),
      countryCapital: Joi.string().min(3).required(),
      primaryLanguage: Joi.string().min(3).required()
  })
  return schema.validate(body)
}
 