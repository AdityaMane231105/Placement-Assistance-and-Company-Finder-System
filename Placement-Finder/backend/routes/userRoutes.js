const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// POST /api/users
router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
