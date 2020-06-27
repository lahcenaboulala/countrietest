const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
 let StateSchema = new Schema({
     name: { type: String, required:true, max: 100  },
    
     

    
 });
 //export the model
 module.exports = mongoose.model('State' , StateSchema) ;