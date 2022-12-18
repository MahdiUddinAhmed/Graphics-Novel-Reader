const router = require("express").Router();
const User = require("../../Model/model/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {register, login} = require("../../Test/test");

router.post("/register", async(req, res) => {
    const {username, email, password} = req.body;
    register(username,email,password);
    const accessToken = jwt.sign({id: username}, "t4389utjh3489ujt3489", {expiresIn: "5d"});
    const refreshToken = jwt.sign({id: username}, "329rhf28rh8932hjr2389", {expiresIn: "7d"});
    const encryptedPassword = CryptoJS.AES.encrypt(password, "Mahdi").toString(); 
    const newUser = new User({
        username,
        email,
        password:encryptedPassword
    });
    try {
        const savedUser = await newUser.save();
        res.json({username,email,password});
    } catch (err) {
        if(err.code === 11000){
            return res.json({status:201, message:"Username or email already exists", error:err});
        }
        else{
        return res.status(500).json(err);
        }
    }
});


//LOGIN

router.post("/login", async(req, res) => {
    const {username, password} = req.body;
    login(username,password);
    const accessToken = jwt.sign({id: username, password}, "t4389utjh", {expiresIn: "5d"});
    const refreshToken = jwt.sign({id: username, password}, "329rhf28rh8932hjr2389", {expiresIn: "7d"});
    try {
        const user = await User.findOne({username});
        if(user === null){
            return res.json({status:201, message:"no user exists"});
        }
        else{
            const bytes = CryptoJS.AES.decrypt(user.password, "Mahdi");
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            if(originalPassword !== password){
                return res.json({status:201, message:"wrong password"});
            }
            else{
                res.cookie("accessToken",accessToken,{expire: 360000 + Date.now(), secure:true, httponly:true, samesite:"none"});
                res.cookie("refreshToken",refreshToken,{expire: 3600000 + Date.now(), secure:true, httponly:true, samesite:"none"});
                return res.json({status:200, message:"logged in",route:"/home"});
            }
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
    
    
});

module.exports = router;