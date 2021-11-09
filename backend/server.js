const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://Timetable:Timetable@cluster0.pyppl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established");
})

const timetablesRouter = require('./routes/timetable')
const usersRouter = require('./routes/users')

app.use('/timetables', timetablesRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log(`server is running on port: ${port}`))