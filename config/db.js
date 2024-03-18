// Database Connectivity.

const mongoose = require('mongoose')
const app = require("../app")

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
}

module.exports = connectToDb