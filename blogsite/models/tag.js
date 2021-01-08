const { uniqueId } = require("lodash");
const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  tagname : {
    type : String,
    required : true,
  }, 
});

module.exports = mongoose.model("Tag", tagSchema, "tags");

 