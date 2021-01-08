const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class UserLogic {


    async hash(password){
        return bcrypt.hash(password,10);
    }

    async comparePassword(newPassword,oldPassword){
        return bcrypt.compare(newPassword,oldPassword);
    }

    async generateToken(userId,userName,email){
        const userData = {
            user_id : userId,
            username: userName,
            email: email,
        };
        const token = await jwt.sign(userData, "MONGO_SECRET", { expiresIn: "7d" });
        return token;
    }

}

module.exports = UserLogic;