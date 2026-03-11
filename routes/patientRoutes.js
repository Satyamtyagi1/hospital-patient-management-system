const express = require('express');
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatients
} = require('../controllers/patientController');

const router = express.Router();

// Specific routes need to come before parametered routes like /:id
router.get('/search', searchPatients);

router.route('/')
  .get(getPatients)
  .post(createPatient);

router.route('/:id')
  .get(getPatientById)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
