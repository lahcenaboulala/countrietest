const Countries = require('../models/countriemodel');
const States = require('../models/statesmodel');
const Joi = require('@hapi/joi');
const { string } = require('@hapi/joi');



exports.getCountriecode = (req, res) => {
    Countries.find(countrie ,code1, (err, countrie) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(countrie);
    });
  };

exports.getCountrie = (req, res) => {
    Countries.findById(req.params.countrieId, (err, countrie) => {
        if (err) {
            res.send(err);
            return;
        }
    res.json(countrie);
    });
  };

 // Countries.findById(req.params.countrieId)
  //.populate('States')
 
   
// .exec(function (err, Countries){
   // if (err) {
     //res.send(err);
     //return;
   //}
  //res.json(countrie);
//})
//};
exports.getAllCountries = (req, res) => {
  Countries.find({}, (err, countrie) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json(countrie);
  });
};

exports.createCountrie = (req, res) => {
  const newCountrie = new Countries(req.body);

  const { error } = validateBody(req.body)
  if (error) {
      //400 Bad request
      res.status(400).send(error)
      return
  }

  newCountrie.save((err, countrie) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json(countrie);
  });
};

exports.updateCountrie = (req, res) => {
  Countries.findOneAndUpdate({ _id: req.params.countrieId }, req.body,
      (err, country) => {
          if (err) {
              res.send(err);
              return;
          }
          res.json(countrie);
      });
};

exports.deleteCountrie = (req, res) => {

  Countries.deleteOne({ _id: req.params.countrieId }, (err) => {
      if (err) {
          res.send(err);
          return;
      }
      res.json({
          message: `country ${req.params.countrieId} successfully deleted`
      });
  });
};

function validateBody(body) {
  const schema = Joi.object({
      countrieName: Joi.string().min(3).required(),
      countriecode: Joi.string().min(3).required(),
      countriephone: Joi.number().min(3).required(),
      countrieCurrency: Joi.string().min(3).required(),
      
     
  })
  return schema.validate(body)
}
exports.getCountriecode = (req, res) => {
    Countries.find(country => country.getCountriecode, (err, countrie) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(countrie);
    });
}

