const { deleteMovie } = require("../controllers/moviesController.js");
const movieRepository = require("../repositories/movierepository.js")

class movieServices {

    static findMovies = async (next) => {
        try {
            const data = movieRepository.findMovies(next);
            return data;
        } catch(err) {
            next(err)
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await movieRepository.findById(id, next);
            return data;
        } catch(err){
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try {
            const data = await movieRepository.createMovie(params, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static deleteMovie = async (id, next) => {
        try {
            return movieRepository.deleteMovie(id, next);
        } catch(err){
            next(err);
        }
    }
}

module.exports = movieServices;
