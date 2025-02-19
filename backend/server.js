const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');  
const initializeSuperAdmin = require('./config/initSuperAdmin');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const bookRoute = require('./routes/bookRoute');


connectDB();
initializeSuperAdmin();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/books",bookRoute);

app.listen(PORT, ()=> {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
})