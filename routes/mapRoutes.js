const express = require('express');
const { getMapData } = require('../controllers/mapController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, getMapData);

module.exports = router;
