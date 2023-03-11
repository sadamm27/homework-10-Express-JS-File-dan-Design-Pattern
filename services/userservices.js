const { deleteUser } = require("../controllers/userController.js");
const userRepository = require("../repositories/userController.js")

class userService {

    static findUsers = async (next) => {
        try {
            const data = userRepository.findUsers(next);
            return data;
        } catch(err) {
            next(err)
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await userRepository.findById(id, next);
            return data;
        } catch(err){
            next(err);
        }
    }

    static createUser = async (params, next) => {
        try {
            const data = await userRepository.createUser(params, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static deleteUser = async (id, next) => {
        try {
            return userRepository.deleteUser(id, next);
        } catch(err){
            next(err);
        }
    }
}

module.exports = userService;
