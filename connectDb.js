const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {

        const connectToDb = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Database connected")

    }
    catch (error) {
        console.error("DB connection failed")
    }
};

module.exports = connectDb;
