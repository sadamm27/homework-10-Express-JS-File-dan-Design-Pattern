const userService = require("../services/userservices.js");

class usersController {
    static findUsers = async (req, res, next) => {

        try {
            const data = await userService.findUsers (next);
            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static findById = async (req, res, next) => {

        try {
            const {id} = req.params;
            const data = await userService.findById(id, next);
            if(data){
                res.status(200).json(data);
            } else {
                next({name: "ErrorNotFound"});
            }   
        } catch(err) {
            next(err);
        }
    }

    static createUser = async (req, res, next) => {
       
        try {
           const data = await userService.createUser(req.body, next)

          res.status(201).json(data);        
        } catch(err) {
            next(err);
        }
    }
    static updateUser = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await userService.updateUser(id, req.body, next);

            res.status(201).json(data);  
        } catch(err){
            next(err);
        }
    }
    static deleteUser = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await userService.deleteUser(id, next);
            if(data) {
                res.status(200).json({
                    message: "deleted successfully",
                    data
                });
            } else {
                next({name: "ErrorNotFound"});
            }
        } catch(err) {
            next(err);
        }
    }
}

module.exports = usersController;