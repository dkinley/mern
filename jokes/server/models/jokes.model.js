const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,  //this is the validation for a name for the db
        required: [ true, "You must have a joke setup"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "Set up must be at least 2 characters long"],
    },
    punchline: {
        type: String, 
        required: [ true, "You must have a punchline"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [1, "The punchline must be at least 1 character long"],
    },    
},
    { timestamps: true }); // need it! this is the options of the Schema, required
    module.exports = mongoose.model("jokes", JokesSchema);