var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('employees', userSchema);