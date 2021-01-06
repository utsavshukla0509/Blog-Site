const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  userid : {
    type : String,
    required : true
  },
  caption_tag_list: []  
});

module.exports = mongoose.model("Article", articleSchema, "articles");

 