const Article = require("../models/article");


class ArticleRepo {

constructor() {}

    async getUserDetailBySorting(){
        return Article.find({}).sort({createdOn: -1})
    }

    async getUserDetail(userId){
        return Article.find({userId : userId})
    }

    async saveArticle(newArticleId, userId, description, tempCaptionList) {
        const articleData = new Article({
            _id: newArticleId,
            userId: userId,
            description : description,
            createdOn : Date.now(),
            captionTagList : tempCaptionList
        });

        return articleData.save();
    }

}

module.exports = ArticleRepo;
