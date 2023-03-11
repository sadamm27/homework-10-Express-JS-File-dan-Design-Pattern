const movies = require("../models/movie.js");
const Movie = require("../models/movie.js");
const { deleteMovie } = require("../services/movieservices.js");

class movieRepository {

    static findMovies = async (next) => {
        
        try {
            const data = await Movie.getMovies(next);
            return data;
        } catch(err) {
            next(err);
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await Movie.findByid(id, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static createMovie = async (params, next) =>{
        try {
            const data = await movies.createMovie(params, next);
            return data;
        } catch(err) {
            next(err);
        }
    }
    static deleteMovie = async (id, next) => {
        try {
            return movies.deleteMovie(id, next)
        } catch(err){
            next(err);
        }
    }
}

module.exports = movieRepository;