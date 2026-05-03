const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  package: { type: String },
  packageValue: { type: Number },
  skills: [{ type: String }],
  eligibility: { type: String },
  location: { type: String },
  description: { type: String },
  aboutCompany: { type: String },
  packageDetails: { type: String },
  internshipAvailable: { type: Boolean, default: false },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Company', companySchema);
