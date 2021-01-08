const Article = require("../models/article");


class ArticleRepo {

constructor() {}

    async getUserDetailBySorting(){
        return Article.find({}).sort({createdOn: 1})
    }

    async getUserDetail(userId){
        return Article.find({user_id : userId})
    }

    async saveArticle(newArticleId, user_id, description, tempCaptionList) {
        const articleData = new Article({
            _id: newArticleId,
            user_id: user_id,
            description : description,
            createdOn : Date.now(),
            captionTagList : tempCaptionList
        });

        return articleData.save();
    }

}

module.exports = ArticleRepo;
