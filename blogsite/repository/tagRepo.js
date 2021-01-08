const mongoose = require("mongoose");

const Tag = require("../models/tag");


class TagRepo {

constructor() {}

    async getTag(tag) {
        return Tag.find({tagname: tag});
    }

    async getTagByTagId(tagId){
        return Tag.find({_id : tagId});
    }

    async createTag(tag) {
        const tagData = new Tag({
            _id: mongoose.Types.ObjectId(),
            tagname: tag
        });
        await tagData.save();
        return tagData;
    }

}

module.exports = TagRepo;
