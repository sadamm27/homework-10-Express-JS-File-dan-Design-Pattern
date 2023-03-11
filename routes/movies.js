const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js")

router.get("/movies", moviesController.findMovies);
router.get("/movies/:id", moviesController.findById);
router.post("/movies", moviesController.createMovie);
router.put("/movies:id", moviesController.updateMovie);
router.delete("/movies/:id", moviesController.deleteMovie);
module.exports = router;