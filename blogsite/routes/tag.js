const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const {GetTagArticles} = require('../controller/tag/getTagArticles');

const getTagArticles = new GetTagArticles();

router.get("/:tagname",checkAuth,(req,res) => {
    getTagArticles.handleRequest(req,res);
});


module.exports = router;