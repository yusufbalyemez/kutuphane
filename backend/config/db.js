const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB bağlantısı başarılı oldu.");
    } catch (error) {
        console.error("MongoDB bağlantısı başarısız oldu.",error);
        process.exit(1);
    }
}

module.exports = connectDB;