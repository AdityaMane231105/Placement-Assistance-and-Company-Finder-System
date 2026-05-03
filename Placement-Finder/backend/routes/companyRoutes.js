const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// GET /api/companies
router.get('/', async (req, res, next) => {
  try {
    const companies = await Company.find().lean();
    res.json(companies);
  } catch (error) {
    next(error);
  }
});

// POST /api/companies
router.post('/', async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
