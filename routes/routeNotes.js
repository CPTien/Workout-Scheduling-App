const express = require('express');
const router = express.Router();

const noteCtrl = require('../controllers/ctrlNotes');

// // http://localhost:3000/movies/123/reviews
// router.post("/movies/:id/reviews", reviewCtrl.create);

// // http://localhost:3000/reviews/123
// router.delete('/reviews/:id', reviewCtrl.delete);

module.exports = router;