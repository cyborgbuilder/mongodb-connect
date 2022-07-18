import express  from "express";
import mongoose from "mongoose";
import Info from './infoSchema.js'
import Cors from 'cors'
const connection = 'mongodb+srv://admin:YhHWNQmtDLADVGxT@cluster0.grouope.mongodb.net/?retryWrites=true&w=majority';

// app config
const app = express();
const port = process.env.PORT || 8001;

//  Middlewear
app.use(express.json());
app.use(Cors());
// DB Config

mongoose.connect(connection);


// API Endpoint
app.get("/", (req, res) => res.status(200).send("Hello "));

app.get("/test/info", (req, res) => {
    const stdInfo = req.body;


    Info.find(stdInfo, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
});


app.post("/test/info", (req, res) => {
    const stdInfo = req.body;

    Info.create(stdInfo, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});


// Listener

app.listen(port, () => console.log(`listening on ${port}`));