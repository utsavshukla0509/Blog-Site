const express = require("express");
const router = express.Router();

const {SignUp} = require('../controller/user/signUp');
const {SignIn} = require('../controller/user/signIn');

const signUp = new SignUp();
const signIn = new SignIn();

router.post("/signup",(req,res) => {
    signUp.handleRequest(req,res);
});
router.post("/login",(req,res) => {
    signIn.handleRequest(req,res);
});


module.exports = router;