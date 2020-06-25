const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 let ProductSchema = new Schema({
     name: { type: String, required:true, max: 100  },
     code: {type: Number, required: true},
     currency: {type: String, required: true},
     phone: {type: Number, required: true},
     

    
 });
 //export the model
 module.exports = mongoose.model('countrie' , ProductSchema) ;