const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  user_id : {
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

 