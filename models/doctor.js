const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    dName: String,
    specialization: String,
    contact: String,
    address: String
});

module.exports = mongoose.model('doctor', DoctorSchema);
