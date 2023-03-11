const pool = require("../config/config.js");
const { updateUser } = require("../controllers/userController.js");
const { deleteUser } = require("../repositories/userrepository.js");

class users {

    static getUsers = async (next) => {

        const findQuery = `
        SELECT
            *
        FROM users;
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
                users.id AS id,
                users.email AS email,
                users.gender AS gender,
                users.role AS role
            FROM users
            WHERE users.id = $1
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
    static createUsers = async (params, next) => {
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
    static updateUsers = async (params, next) => {
        const {id} = req.params;
        const {email, gender, role} = req.body;
    
        const updateUser = `
            UPDATE users
            SET email = $1,
            gender = $2,
            role = $3,
            WHERE id = $4;
        `
    
        pool.query(updateUser, [email, gender, role, id], (err, result) => {
            if(err) next(err)
    
            res.status(200).json({
                message: "Updated successfully"
            })
        })
    }
    static deleteUser = async (id, next) => {
        try {
            const deleteQuery = `
            DELETE FROM users
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

module.exports = users;