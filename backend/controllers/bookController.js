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

exports.addBook = async (req,res) => {
    try {
        const {title,author,numberOfPages} = req.body;
        const newBook = new Book({
            title,
            author,
            numberOfPages
        })
        await newBook.save();
        res.status(201).json({message: "Kitap başarıyla eklendi.", book:newBook});

        
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Kitap ekleme sırasında bir hata oluştu."});
    }
}