const pool = require("../config/config.js");
const { deleteMovie } = require("../repositories/movierepository.js");

class movies {

    static getMovies = async (next) => {

        const findQuery = `
        SELECT
            *
        FROM movies;
        `
        try {
            const data = await pool.query(findQuery)
            
            return data.rows;
        } catch(err) {
            next(err);
        }
    }
    static findByid = async (id, next) => {

        const findQuery = `
            SELECT
                movies.id AS id,
                movies.title AS title,
                movies.genres AS genre,
                movies.year AS year
            FROM movies
            WHERE movies.id = $1
        `;

        try {
            const data = await pool.query(findQuery, [id])
            
            if(data.rows.length === 0) {
                // next({name: "ErrorNotFound"})
                return {name: "ErrorNotFound"}
            } else {
                return data.rows[0];
            }
        } catch(err) {
            next(err);
        }
    }
    static createMovie = async (params, next) => {
        try {
            const {title, genres, year, photo} = params;
            const insertQuery = `
            INSERT INTO movies (title, genres, year, photo)
            VALUES 
            ($1, $2, $3, $4)
            RETURNING *
            `

            const data = await pool.query(insertQuery, [title, genres, year, photo] )

            return data.rows[0];
        } catch(err) {
            next(err);
        }
    }
    static updateMovies = async (params, next) => {
        const {id} = req.params;
        const {title, genres, year, photo} = req.body;
    
        const updateMovie = `
            UPDATE movies
            SET title = $1,
            genres = $2,
            year = $3,
            photo = $5,
            WHERE id = $6;
        `
    
        pool.query(updateMovie, [title, genres, year, photo, id], (err, result) => {
            if(err) next(err)
    
            res.status(200).json({
                message: "Updated successfully"
            })
        })
    }
    static deleteMovie = async (id, next) => {
        try {
            const deleteQuery = `
            DELETE FROM movies
            WHERE id = $1
            RETURNING *
            `

            const data = await pool.query(deleteQuery, [id]);

            return data.rows[0]
        } catch(err) {
            next(err);
        }
    }
}

module.exports = movies;