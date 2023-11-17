import express  from "express";
import connectionToDB from './config/dbConnection.js';
import cors from "cors";
import User from "./models/user.model.js";

import {config} from 'dotenv';
config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000

//connection to database
app.listen(PORT, async ()=>{
    await connectionToDB();
    console.log(`App is running at http:localhost:${PORT}`);
})

//routes

//new user route
app.post("/user/new", async(req, res) => {
    let {username, email, password, phone} = req.body;
    const user = await User.create({
        username,
        email,
        password,
        phone
    });
    const savedUser = await user.save();
    res.send(savedUser);
})

//get users route
app.get("/users", async(req, res) =>{
    const allUsers = await User.find({});
    res.send(allUsers)
})
