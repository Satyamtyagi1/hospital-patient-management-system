const Patient = require('../models/Patient');

// @desc    Create a new patient
// @route   POST /patients
// @access  Public
const createPatient = async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all patient records
// @route   GET /patients
// @access  Public
const getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, count: patients.length, data: patients });
  } catch (error) {
    next(error);
  }
};

// @desc    Get patient by ID
// @route   GET /patients/:id
// @access  Public
const getPatientById = async (req, res, next) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ success: false, error: 'Patient not found' });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

// @desc    Update patient details
// @route   PUT /patients/:id
// @access  Public
const updatePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!patient) {
      return res.status(404).json({ success: false, error: 'Patient not found' });
    }
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete patient record
// @route   DELETE /patients/:id
// @access  Public
const deletePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ success: false, error: 'Patient not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

// @desc    Search patient by name
// @route   GET /patients/search
// @access  Public
const searchPatients = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ success: false, error: 'Please provide a name to search' });
    }
    
    const patients = await Patient.find({ fullName: { $regex: name, $options: 'i' } });
    res.status(200).json({ success: true, count: patients.length, data: patients });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatients
};
