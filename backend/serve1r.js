const express = require('express');
import data from './data';
const bodyParser = require('body-parser');
import dotenv from 'dotenv';
const cors = require('cors');
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import config from './config';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

//const app = express();
var app = express();


app.use("/api/users",userRoute);
app.use(bodyParser.json());
app.use(cors({ origin:'http://localhost:3000'}));


app.get("/api/products", (req, res) => {
     res.send(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") })
