const ArticleRepo = require("../../repository/articleRepo");
const TagArticleRepo = require("../../repository/tagArticleRepo");
const TagRepo = require("../../repository/tagRepo");

const articleRepo = new ArticleRepo();
const tagArticleRepo = new TagArticleRepo();
const tagRepo = new TagRepo();
 
class GetTagArticles{
    async handleRequest(req,res){

        const tagName = req.params.tagname;
            
        try {
            const tagData = await tagRepo.getTag(tagName);
            if(tagData.length !== 0){
                const articleData = await tagArticleRepo.getArticles(tagData[0]._id);
                return res.status(200).json({articleData});
            }
            else{
                return res.status(404).send("Tag not found");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
}


module.exports = {GetTagArticles : GetTagArticles};