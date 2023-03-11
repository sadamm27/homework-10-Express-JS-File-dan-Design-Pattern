const users = require("../models/user.js");
const User = require("../models/user.js");
const { deleteUser } = require("../services/userservices.js");

class userrepository {

    static findUsers = async (next) => {
        
        try {
            const data = await User.getUsers(next);
            return data;
        } catch(err) {
            next(err);
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await User.findByid(id, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static createUser = async (params, next) =>{
        try {
            const data = await users.createUser(params, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static deleteUser = async (id, next) => {
        try {
            return users.deleteUser(id, next)
        } catch(err){
            next(err);
        }
    }
}

module.exports = userRepository;