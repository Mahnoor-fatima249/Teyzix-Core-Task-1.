const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MONGO_URI variable hum baad mein .env file mein define karenge
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1); // Agar connect na ho toh server ko stop kar dein
    }
};

module.exports = connectDB;