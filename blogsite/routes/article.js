const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const {Publish} = require('../controller/article/publish');
const {Home} = require('../controller/article/home');

const publish = new Publish();
const home = new Home();

router.post("/publish",checkAuth,(req,res) => {
    publish.handleRequest(req,res);
});

router.get("/home",checkAuth,(req,res) => {
    home.handleRequest(req,res);
});


module.exports = router;