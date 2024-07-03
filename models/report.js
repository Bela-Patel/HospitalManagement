const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, ref: 'patient', required: true },
    doctorId: { type: Schema.Types.ObjectId, ref: 'doctor', required: true },
    description: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('report', ReportSchema);
