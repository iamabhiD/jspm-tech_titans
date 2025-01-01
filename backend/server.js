const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());  // for parsing the json data from request and parse it into the js object for manipulation on the server

const URL = process.env.MONGOURL;

mongoose.connect('mongodb://localhost:27017/stdmgmt',{useNewUrlParser:true,
    useUnifiedTopology : true,}
)
.then(()=>{
    console.log("Connected to the database");
    // start listening to the port 
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`);
    })
})
.catch((err)=>{console.error(err);})

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Coming from Backend",
        success :true
    })
})