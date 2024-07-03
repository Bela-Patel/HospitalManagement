const Patient = require('../models/patient');

exports.registerPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        console.log(patient)
        if (!patient) {
            return res.status(404).send();
        }
        res.send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.send({ message: 'Patients retrieved successfully.', patients });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!patient) {
            return res.status(404).send({ message: 'Patient not found.' });
        }
        res.send({ message: 'Patient updated successfully.', patient });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).send({ message: 'Patient not found.' });
        }
        res.send({ message: 'Patient deleted successfully.', patient });
    } catch (error) {
        res.status(500).send(error);
    }
};
