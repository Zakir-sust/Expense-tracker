import itemRoute from "./api/route.js"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './api/user.js'
dotenv.config()

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection established")
})

app.use('/api/expense-tracker',itemRoute)
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})

