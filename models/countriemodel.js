const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
 let CountrieSchema = new Schema({
     name: { type: String, required:true, max: 100  },
     code: {type: Number, required: true},
     phone: {type: Number, required: true},
     currency: {type: String, required: true},

     

    
 });
 //export the model
 module.exports = mongoose.model('Countries' , CountrieSchema) ;
 const countrie = require("../data/countries.json");
 