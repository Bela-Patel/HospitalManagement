const Doctor = require('../models/doctor');

exports.registerDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).send(doctor);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).send();
        }
        res.send(doctor);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.send({ message: 'Doctors retrieved successfully.', doctors });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(404).send({ message: 'Doctor not found.' });
        }
        res.send({ message: 'Doctor updated successfully.', doctor });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).send({ message: 'Doctor not found.'});
        }
        res.send({ message: 'Doctor deleted successfully.', doctor });
    } catch (error) {
        res.status(500).send(error);
    }
};
