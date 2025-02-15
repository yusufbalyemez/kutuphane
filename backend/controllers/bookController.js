const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kitaplar getirilirken hata oluştu." });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Kitap bulunamadı." });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kitap getirilirken hata oluştu." });
  }
};

exports.getBookWithAuthor = async (req, res) => {
  try {
    const author = req.params.author;
    const books = await Book.find({ author: author });
    if (books.length === 0) {
      return res.status(404).json({ message: "Yazarın kitapları bulunamadı." });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Yazarın kitapları getirilirken hata oluştu." });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author, numberOfPages } = req.body;
    const newBook = new Book({
      title,
      author,
      numberOfPages,
    });
    await newBook.save();
    res
      .status(201)
      .json({ message: "Kitap başarıyla eklendi.", book: newBook });
    //201 oluşturmada 200 ise güncelleme, listeleme, silme sonuçlarında kullanılır.
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Kitap ekleme sırasında bir hata oluştu." });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findOneAndDelete({ _id: bookId });
    if (!deletedBook) {
      return res
        .status(404)
        .json({ message: "Silmek istediğiniz kitap bulunamadı" });
    }
    res.json({ message: "Kitap başarıyla silindi." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Kitap silme sırasında bir hata oluştu." });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { title, author, numberOfPages } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, numberOfPages },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Kitap başarıyla güncellendi.", book: updatedBook });
    //Güncelleme olduğu için 200 status kodu kullanılır.
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Kitap güncelleme sırasında bir hata oluştu." });
  }
};
