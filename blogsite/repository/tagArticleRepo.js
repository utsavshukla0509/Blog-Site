const mongoose = require("mongoose");

const TagArticle = require("../models/tag_article");


class TagArticleRepo {

constructor() {}

    async insertTagArticle(tagId, articleId) {
        const tagarticleData = new TagArticle({
            _id: mongoose.Types.ObjectId(),
            tagId : tagId,
            articleId : articleId
        });
        return tagarticleData.save()
    }

    async getArticles(tagId) {
        return TagArticle.find({tagId: tagId}); 
    }
}

module.exports = TagArticleRepo;
