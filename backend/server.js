const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


connectDB();

const app = express();

app.get('/', (req,res)=> {
    res.json('Node API çalışıyor.')
});

app.listen(PORT, ()=> {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
})