const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 let CitySchema = new Schema({
     name: { type: String, required:true, max: 100  },
     code: {type: Number, required: true},

    
 });
 //export the model
 module.exports = mongoose.model('City' , CitySchema) ;