const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json({ extended: false }));

dotenv.config({path: './config.env'});

// database files
require("./db/conn");

// PAYMENT ROUTES
app.use("/payment", require('./payment'));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate")
    next();
})

// yaha middleware ke throughjo b data aa rha json me vo bas dikhado 
app.use(express.json());

//router files
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// app.get('/about', middleware, (req, res) => {
//     console.log(`Hello my about`); // iske pehle middleware chalta h phir about chalega
//     res.send(`Hello About Me from the server`);
// });


app.get('/contact', (req, res) => {
    res.send(`Hello Contact Me from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})
