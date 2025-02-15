const Book = require('../models/bookModel');

exports.getAllBooks = async (req,res) => {
    try {
        const book = await Book.find({});
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Kitaplar getirilirken hata oluştu."});
    }
}