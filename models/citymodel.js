const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 let CitySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
     name: { type: String, required:true, max: 100  },
     zipcode: {type: Number, required: true},

     state :{type: mongoose.Schema.Types.ObjectId, ref: 'states'},
     countrie :{type: mongoose.Schema.Types.ObjectId, ref: 'countries'}
 });
 //export the model
 module.exports = mongoose.model('City' , CitySchema) ;
 