const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  userId : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  captionTagList: [],
  createdOn:{ type : Number}  
});

module.exports = mongoose.model("Article", articleSchema, "articles");

 