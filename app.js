const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/myhealth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const patientRoutes = require('./routes/patients');
const doctorRoutes = require('./routes/doctors');
const reportRoutes = require('./routes/reports');

app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/reports', reportRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

/// API end points check in postman
// Patient Register : POST: http://localhost:3000/patients/register
// Get all patients: GET : http://localhost:3000/patients
// Get Patient data by ID: GET: http://localhost:3000/patients/:id
// Update Patient data : PUT: http://localhost:3000/patients/:id
// Delete Patient data : DELETE: http://localhost:3000/patients/:id
// Doctor Register: POST:  http://localhost:3000/doctors/register
// Get Doctor by ID: GET:http://localhost:3000/doctors/:id
// Get all doctors: GET: http://localhost:3000/doctors
// Update doctor data : PUT: http://localhost:3000/doctors/:id
// Delete doctor data : DELETE: http://localhost:3000/doctors/:id
// Create a Report: POST: http://localhost:3000/reports/create
// Get Reports: GET : http://localhost:3000/reports?patientId=patientObjectId
// or
// GET : http://localhost:3000/reports?doctorId=doctorObjectId
// or
// GET : http://localhost:3000/reports
