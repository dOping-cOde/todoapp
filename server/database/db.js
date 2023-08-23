
import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.rpby78a.mongodb.net/todoApp`
export const Connection = ()=>{
    mongoose.connect(MONGODB_URL, { useNewUrlParser:true});

    mongoose.connection.on("connected", ()=>{
        console.log("Database connected successfully");
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', ()=>{
        console.log("Error while connecting with databse", error.message);
    })
}

export default Connection;