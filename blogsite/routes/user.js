const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const {SignUp} = require('../controller/user/signUp');
const {SignIn} = require('../controller/user/signIn');
const {GetUserDetail} = require('../controller/user/getUserDetail');


const signUp = new SignUp();
const signIn = new SignIn();
const getUserDetail = new GetUserDetail();

router.post("/signup",(req,res) => {
    signUp.handleRequest(req,res);
});

router.post("/login",(req,res) => {
    signIn.handleRequest(req,res);
});

router.get("/:username",checkAuth,(req,res) => {
    getUserDetail.handleRequest(req,res);
});


module.exports = router;