// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
import itemRoute from "./api/route.js"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://samba:ROOT@cluster0.atu6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection established")
})

app.use('/api/expense-tracker',itemRoute)

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})

