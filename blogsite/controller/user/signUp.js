require('dotenv').config();
const UserRepo = require("../../repository/userRepo");
const UserLogic = require("../../logic/userLogic");

const userRepo = new UserRepo();
const userLogic = new UserLogic();



class SignUp{
    async handleRequest(req, res){
        // console.log(req.body);
        const {username,age, email, password} = req.body;

        try{
            const userData =  await userRepo.getUserDataByEmail(email);
            if(userData.length !== 0){
                return res.status(404).json({msg : 'The entered Email is already Esit'});
            }
            else{
                const hash = await userLogic.hash(password);
                await userRepo.createUser(username,age,email,hash);
                return res.status(200).json({message: "The user has been signed up successfully!"});
            }
        }
        catch(error){
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
};

module.exports = {SignUp : SignUp};