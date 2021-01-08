const mongoose = require("mongoose");

const Tag = require("../models/tag");


class TagRepo {

constructor() {}

    async getTag(tag) {
        return Tag.find({tagName: tag});
    }

    async getTagByTagId(tagId){
        return Tag.find({_id : tagId});
    }

    async createTag(tag) {
        const tagData = new Tag({
            _id: mongoose.Types.ObjectId(),
            tagName: tag
        });
        await tagData.save();
        return tagData;
    }

}

module.exports = TagRepo;
