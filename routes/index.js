const express = require("express");
const Movie = require("..models/Movies.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/* GET all movies */
router.get("/movies", (res, req, next) => {
  Movie.find()
    .select({ title: 1, image: 1 })
    .then(moviesFromDB => {
      res.render("movies", { moviesFromDB })
    })
    .catch(err => console.log)
});

/* GET MOVIES page 
router.get("movies/:movieId", (req, res) => {
  console.log(req.params);
  Movie.findById(req.params.bookId).then((result) => {
    res.render("/movies", result);
  });
});
module.exports = router;*/
