
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config({path: './.env'});


const app = express();
const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB conection is sucessfull bitch "); 
})

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log('Server is running on port:' + port);
});


