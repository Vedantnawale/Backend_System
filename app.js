require('dotenv').config();
const express = require('express');
const cors = require('cors')

const connectToDb = require('./config/db.js');

const userRoutes = require('./routes/userRoutes.js')

const app = express();

// Express middleware --> Checkpoint // ye jo request pahle execute karne ke liye
app.use(express.json()) // json data
app.use(express.urlencoded({extended: true})) // get request agar url se aa raha hai to usko bhi le lo

app.use(cors())

// init connection to db
connectToDb()

app.use('/', userRoutes);

// export default app;  we are not using type:module so we write.

module.exports = app;