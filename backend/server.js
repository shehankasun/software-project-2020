const express = require('express');
import data from './data';
import dotenv from 'dotenv';
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gentshouse',(err)=>{
    if(!err)
    console.log('MongoDB connection Success.......!');
    else
        console.log('Error In DB connection : ' + JSON.stringify(err,undefined,2));
    });
var bodyParser = require('body-parser');
import userRoute from './routes/userRoute';


dotenv.config();




//const app = express();
var app = express();

app.use(bodyParser.json());


app.use(cors({ origin:'http://localhost:3000'}));


app.get("/api/products", (req, res) => {
     res.send(data.products);
});
app.use("/api/User",userRoute);


app.listen(5000, () => { console.log("Server started at http://localhost:5000") })
