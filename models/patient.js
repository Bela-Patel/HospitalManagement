const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    pName: String,
    age: Number,
    gender: String,
    contact: String,
    address: String
});

module.exports = mongoose.model('patient', PatientSchema);
