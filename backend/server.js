const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const bookRoute = require('./routes/bookRoute');


connectDB();

const app = express();

app.use("/api/books",bookRoute);

app.listen(PORT, ()=> {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
})