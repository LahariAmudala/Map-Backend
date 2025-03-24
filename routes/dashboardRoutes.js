const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, getDashboardData);

module.exports = router;
