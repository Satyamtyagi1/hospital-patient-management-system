const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, 'Please add a full name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please add a phone number'],
  },
  age: {
    type: Number,
    required: [true, 'Please add an age'],
    min: [1, 'Age must be positive'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  disease: {
    type: String,
    required: [true, 'Please add a disease/diagnosis'],
  },
  doctorAssigned: {
    type: String,
    required: [true, 'Please add assigned doctor'],
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  roomNumber: {
    type: String,
  },
  patientType: {
    type: String,
    enum: ['Inpatient', 'Outpatient'],
    default: 'Outpatient',
  },
  status: {
    type: String,
    enum: ['Admitted', 'Discharged', 'Transferred'],
    default: 'Admitted',
  }
}, {
  timestamps: true
});

// Auto-generate patientId before saving
patientSchema.pre('save', async function(next) {
  if (!this.patientId) {
    const count = await this.constructor.countDocuments();
    // Generates ID like PAT-2024-0001
    this.patientId = `PAT-${new Date().getFullYear()}-${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Patient', patientSchema);
