const City = require('../models/citymodel');
const Joi = require('@hapi/joi');

exports.getCity = (req, res) => {
    City.findById(req.params.cityId, (err, city) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(city);
    });
  };
  exports.getAllCity = (req, res) => {
    City.find({}, (err, city) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(city);
    });
  };
  
  exports.createCity = (req, res) => {
    const newCity = new City(req.body);
  
    const { error } = validateBody(req.body)
    if (error) {
        //400 Bad request
        res.status(400).send(error)
        return
    }
  
    newCity.save((err, city) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(city);
    });
  };
  
  exports.updateCity = (req, res) => {
    City.findOneAndUpdate({ _id: req.params.cityId }, req.body,
        (err, city) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json(city);
        });
  };
  
  exports.deleteCity = (req, res) => {
  
    City.deleteOne({ _id: req.params.cityId }, (err) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({
            message: `city ${req.params.cityId} successfully deleted`
        });
    });
  };
  
  function validateBody(body) {
    const schema = Joi.object({
        cityName: Joi.string().min(3).required(),
        statecity: Joi.string().min(3).required(),
        
        
       
    })
    return schema.validate(body)
  }
  
  
  
 
