const User = require("../models/user");
const mongoose = require("mongoose");

class UserRepo {

constructor() {}

    async getUserData(userId){
        return User.find({_id : userId})
    }

    async getUserDataByEmail(email){
        return User.find({email : email})
    }

    async createUser(username,age,email,hash) {
        const userData = new User({
            _id: mongoose.Types.ObjectId(),
            username: username,
            age : age,
            email: email,
            password: hash,
        });
        await userData.save();
        return userData;
    }
    
}

module.exports = UserRepo;
