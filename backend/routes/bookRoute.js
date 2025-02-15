const express = require('express');

const router = express.Router();

const {getAllBooks,addBook,deleteBook} = require('../controllers/bookController');

router.get('/getir',getAllBooks);
router.post('/ekle',addBook);
router.delete('/sil/:id',deleteBook);

module.exports = router;