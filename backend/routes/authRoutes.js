const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');

// POST /signup route
router.post('/signup', signup);

module.exports = router;
