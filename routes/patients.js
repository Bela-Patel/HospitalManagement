const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/register', patientController.registerPatient);
router.get('/:id', patientController.getPatient);
router.get('/', patientController.getAllPatients);
router.put('/:id', patientController.updatePatient); // Update route
router.delete('/:id', patientController.deletePatient);

module.exports = router;
