const movieService = require("../services/movieservices.js");

class moviesController {
    static findMovies = async (req, res, next) => {

        try {
            const data = await movieService.findMovies (next);
            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static findById = async (req, res, next) => {

        try {
            const {id} = req.params;
            const data = await movieService.findById(id, next);
            if(data){
                res.status(200).json(data);
            } else {
                next({name: "ErrorNotFound"});
            }   
        } catch(err) {
            next(err);
        }
    }

    static createMovie = async (req, res, next) => {
       
        try {
           const data = await movieService.createMovie(req.body, next)

          res.status(201).json(data);        
        } catch(err) {
            next(err);
        }
    }
    static updateMovie = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await movieService.updateMovie(id, req.body, next);

            res.status(201).json(data);  
        } catch(err){
            next(err);
        }
    }
    static deleteMovie = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await movieService.deleteMovie(id, next);
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

module.exports = moviesController;