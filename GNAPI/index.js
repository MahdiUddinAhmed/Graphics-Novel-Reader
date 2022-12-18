const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Controller/Routes/user");
const authRoute = require("./Controller/Routes/auth");

const session = require("express-session");

//configuration imports 
const cors = require("cors");
const {cookie,corsOptionsContent,corsOptionsAuth, corsOptions, sessionSetting} = require("./Data/configuration");

dotenv.config();

const mongoo = require("./Model/mongoose");

// environment setup
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( express.static( "public" ) );
app.use(session(sessionSetting));
app.use(cors(corsOptions));

app.get("/api/test", (req,res) => {
    res.send({
        status:200,
        message:"test is successful"
    })
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Back end Server is Running!");

});