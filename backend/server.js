const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req,res)=> {
    res.json('Node API çalışıyor.')
});

app.listen(PORT, ()=> {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
})