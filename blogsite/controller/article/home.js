const ArticleRepo = require("../../repository/articleRepo");
const TagRepo = require("../../repository/tagRepo");
const TagLogic = require("../../logic/tagLogic");


const tagLogic = new TagLogic();
const articleRepo = new ArticleRepo();
const tagRepo = new TagRepo();

class Home{
    async handleRequest(req,res){
        let homeArticlesData = [];

        try {
            const articleData =  await articleRepo.getUserDetailBySorting();
            // console.log(articleData);
            let promises = [];
            articleData.forEach(async(data)=>{
                let articleTags = [];
                const tagsId = data.captionTagList;
                tagsId.forEach((tagId)=>{
                    promises.push(tagRepo.getTagByTagId(tagId).then((tagData) => {
                        articleTags.push(tagData[0].tagName);
                    }));
                })
                homeArticlesData.push({"article" :articleData,"tagNames" : articleTags});
            })
            await Promise.all(promises);
            // console.log(homeArticlesData);
            return res.status(200).send(homeArticlesData);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
}


module.exports = {Home : Home};