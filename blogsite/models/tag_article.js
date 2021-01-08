const mongoose = require("mongoose");

const tagArticleSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  tagId : {
    type : String,
    required : true
  },
  articleId : {
    type : String,
    required : true
  },  
});

module.exports = mongoose.model("TagArticle", tagArticleSchema, "tagarticles");

 