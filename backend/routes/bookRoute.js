const express = require('express');

const router = express.Router();

const {getAllBooks,addBook} = require('../controllers/bookController');

router.get('/getir',getAllBooks);
router.post('/ekle',addBook);

module.exports = router;