const mongoose = require("mongoose");

const TagRepo = require("../repository/tagRepo");
const TagArticleRepo = require("../repository/tagArticleRepo");

const tagRepo = new TagRepo();
const tagArticleRepo = new TagArticleRepo();

class TagLogic{

    async process_tag(tag, articleId) {
        const tagList = [];
        const tagData = await tagRepo.getTag(tag)
        // console.log(tagData);
        if (tagData.length === 0) {
           const tagMeta =  await tagRepo.createTag(tag);
            await tagArticleRepo.insertTagArticle(tagMeta._id, articleId);
            tagList.push(tagMeta._id);
        } else {
            await tagArticleRepo.insertTagArticle(tagData[0]._id, articleId);
            tagList.push(tagData[0]._id);
        }
        return tagList;
    }
}

module.exports = TagLogic;