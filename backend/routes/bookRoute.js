const express = require('express');

const router = express.Router();

const {getAllBooks,addBook,deleteBook,updateBook,getBookById,getBookWithAuthor} = require('../controllers/bookController');

router.get('/getir',getAllBooks);
router.get('/getir/:id',getBookById);
router.get('/getirYazar/:author',getBookWithAuthor);
router.post('/ekle',addBook);
router.delete('/sil/:id',deleteBook);
router.put('/guncelle/:id',updateBook);



module.exports = router;