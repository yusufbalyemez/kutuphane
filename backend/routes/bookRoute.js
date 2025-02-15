const express = require('express');

const router = express.Router();

const {getAllBooks} = require('../controllers/bookController');

router.get('/getir',getAllBooks);

module.exports = router;