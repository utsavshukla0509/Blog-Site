const mongoose = require("mongoose");

const tagArticleSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  tagid : {
    type : String,
    required : true
  },
  articleid : {
    type : String,
    required : true
  },  
});

module.exports = mongoose.model("TagArticle", tagArticleSchema, "tagarticles");

 