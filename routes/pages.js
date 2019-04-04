const pagesController = require('../controllers/pages');
const express = require('express');
const router = express.Router();

router.get('/', pagesController.getIndex);
router.get('/workout', pagesController.getWorkout);
router.get('/about', pagesController.getAbout);

module.exports = router;
