const express = require('express');
const router = express.Router();
const { createService, getServices } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

// Public route: Koi bhi dekh sakta hai (Browse Services)
router.get('/', getServices);

// Private route: Sirf logged-in user post kar sakta hai
router.post('/', protect, createService);

module.exports = router;