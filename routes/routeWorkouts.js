const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/ctrlWorkouts');

router.get('/workouts/new', workoutsCtrl.newWorkout);
router.post('/workouts', workoutsCtrl.createWorkout);

// // http://localhost:3000/movies/6305155d63b7f5eefbf7b696/performers
// router.post('/movies/:id/performers', performersCtrl.addToCast);

module.exports = router;
