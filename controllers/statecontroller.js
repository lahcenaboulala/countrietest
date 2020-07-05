const States = require('../models/statesmodel');
const Joi = require('@hapi/joi');

exports.getState = (req, res) => {
    States.findById(req.params.stateId, (err, state) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(state);
    });
  };
  exports.getAllStates = (req, res) => {
    States.find({}, (err, state) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(state);
    });
  };
  
  exports.createState = (req, res) => {
    const newState = new States(req.body);
  
    const { error } = validateBody(req.body)
    if (error) {
        //400 Bad request
        res.status(400).send(error)
        return
    }
  
    newState.save((err, state) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(state);
    });
  };
  
  exports.updateState = (req, res) => {
    States.findOneAndUpdate({ _id: req.params.stateId }, req.body,
        (err, state) => {
            if (err) {
                res.send(err);
                return;
            }
            res.json(state);
        });
  };
  
  exports.deleteState = (req, res) => {
  
    States.deleteOne({ _id: req.params.stateId }, (err) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json({
            message: `state ${req.params.stateId} successfully deleted`
        });
    });
  };
  
  function validateBody(body) {
    const schema = Joi.object({
        stateName: Joi.string().min(3).required(),
        statecity: Joi.string().min(3).required(),
        
        
       
    })
    return schema.validate(body)
  }
 