const User = require("../../models/user");
const Article = require("../../models/article");
const Tag = require("../../models/tag");
const ArticleRepo = require("../../repository/articleRepo");
const UserRepo = require("../../repository/userRepo");

const articleRepo = new ArticleRepo();
const userRepo = new UserRepo();

class GetUserDetail{
    async handleRequest(req,res){

        try {
            const user_id = req.userData.user_id;
            let promises = [];
            promises.push(userRepo.getUserData(user_id));
            promises.push(articleRepo.getUserDetail(user_id));
            const promiseRes = await Promise.all(promises);
            const userData = promiseRes[0];
            const userArticles = promiseRes[1];
            // console.log(userData,userArticles);
            return res.status(200).json({"username":userData[0].username,"age":userData[0].age,"email":userData[0].email,"description": userArticles[0].description});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
}


module.exports = {GetUserDetail : GetUserDetail};