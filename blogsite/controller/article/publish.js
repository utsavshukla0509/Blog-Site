const mongoose = require("mongoose");
const _ = require("lodash");
const ArticleRepo = require("../../repository/articleRepo");
const TagLogic = require("../../logic/tagLogic");


const tagLogic = new TagLogic();
const articleRepo = new ArticleRepo();


class Publish{

    async handleRequest(req,res){
        console.log(req.body);
        const {user_id} = req.userData;
        const description = req.body.description;
        const captionList = req.body.captionTagList;
        const newArticleId = mongoose.Types.ObjectId();

        //handle tags
        let promises = [];
        captionList.forEach(tag => {
            promises.push(tagLogic.process_tag(tag, newArticleId));
        });


        try {
            const promiseResp = await Promise.all(promises);
            const tempCaptionList = _.flatten(promiseResp);
            console.log(tempCaptionList);
            await articleRepo.saveArticle(newArticleId, user_id, description, tempCaptionList);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
        return res.status(200).json({
            message: "Article has been published successfully",
        })    
    }
}


module.exports = {Publish : Publish};