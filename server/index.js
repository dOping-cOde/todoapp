

import express from "express";

import cors from 'cors'

import Connection from "./database/db.js";


import Routes from './routes/route.js'
const app = express();



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', Routes)

const PORT = 8000;
Connection();


app.listen(PORT, ()=>{
    console.log(`App is listening at port number ${PORT}`)
})

