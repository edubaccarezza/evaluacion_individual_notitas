const express = require('express');
const router = express.Router();

const noteController = require ("../controllers/noteController");

router.get('/', noteController.index);
router.get('/detail/:id', noteController.detail);

module.exports = router;