const UserRepo = require("../../repository/userRepo");
const UserLogic = require("../../logic/userLogic");

const userRepo = new UserRepo();
const userLogic = new UserLogic();

class SignIn{
    
    async handleRequest(req, res){
        const { password, email } = req.body;
        try{
            const userData =  await userRepo.getUserDataByEmail(email);
            if(userData.length === 0){
                return res.status(404).json({msg : 'Email not found'});
            }
            else if(userData.length > 0){
                const result = await userLogic.comparePassword(password,userData[0].password);
                if(result){
                    const token = await userLogic.generateToken(userData[0]._id,userData[0].username,userData[0].email);
                    return res.status(200).json({
                            msg: "Authentication has been successful",
                            token : token,
                        });
                }
                else{
                    return res.status(404).json({msg : 'Incorrect Username or Password!'});
                }
            }
        }
        catch(error){
            console.log(error);
            return res.status(500).json({ "error": "Internal server error" });
        }
    }
};

module.exports = {SignIn : SignIn};