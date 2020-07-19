const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
 let StateSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
     name: { type: String, required:true, max: 100  },
     city :[{type: mongoose.Schema.Types.ObjectId, ref: 'city'}],
     countrie :{ type: mongoose.Schema.Types.ObjectId, ref: 'Countries', required: true }
    })
 //export the model
 module.exports = mongoose.model('States' , StateSchema) ;