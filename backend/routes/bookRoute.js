const express = require('express');

const router = express.Router();

const {getAllBooks,addBook,deleteBook,updateBook} = require('../controllers/bookController');

router.get('/getir',getAllBooks);
router.post('/ekle',addBook);
router.delete('/sil/:id',deleteBook);
router.put('/guncelle/:id',updateBook);

module.exports = router;