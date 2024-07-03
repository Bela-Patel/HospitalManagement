const Report = require('../models/report');

exports.createReport = async (req, res) => {
    try {
        const report = new Report(req.body);
        await report.save();
        res.status(201).send({ message: 'Report created successfully', report });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getReports = async (req, res) => {
    try {
        const { patientId, doctorId,dName } = req.query;
        const query = {};
        if (patientId) query.patientId = patientId;
        if (doctorId) query.doctorId = doctorId;
        if (dName) query.dName = dName;

        const reports = await Report.find(query)
            .populate('patientId')
            .populate('doctorId','dName');
       
        if (reports.length === 0) {
            return res.status(404).send({ message: 'No reports found' });
        }

        res.send({ message: 'Reports retrieved successfully', reports });
       
    } catch (error) {
        res.status(500).send(error);
    }
};
