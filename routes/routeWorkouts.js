const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/ctrlWorkouts');

// http://localhost:3000/workouts/new
router.get('/workouts/new', workoutsCtrl.newWorkout);

// http://localhost:3000/workouts
router.post('/workouts', workoutsCtrl.createWorkout);

module.exports = router;
