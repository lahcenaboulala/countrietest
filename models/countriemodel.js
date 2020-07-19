const mongoose = require ('mongoose');
const { string, number } = require('@hapi/joi');

const Schema = mongoose.Schema;
 let CountrieSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
     name: { type: String, required:true, max: 100 , trim :true },
     code1: {type: String, required: true},
     code2: {type: String, required: true},
     phone: {type: Number, required: true},
     currency: {type: String, required: true},
     states : [ {type: mongoose.Schema.Types.ObjectId, ref: 'States'}
      ]
 });
   
 //export the model
 module.exports = mongoose.model('Countries' , CountrieSchema) ;
 
 