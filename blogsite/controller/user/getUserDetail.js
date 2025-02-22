const ArticleRepo = require("../../repository/articleRepo");
const UserRepo = require("../../repository/userRepo");

const articleRepo = new ArticleRepo();
const userRepo = new UserRepo();

class GetUserDetail{
    async handleRequest(req,res){

        try {
            const userId = req.userData.user_id;
            let promises = [];
            promises.push(userRepo.getUserData(userId));
            promises.push(articleRepo.getUserDetail(userId));
            const promiseRes = await Promise.all(promises);
            const userData = promiseRes[0];
            const userArticles = promiseRes[1];
            return res.status(200).json({"data":userData,"articles": userArticles});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
}
 

module.exports = {GetUserDetail : GetUserDetail};