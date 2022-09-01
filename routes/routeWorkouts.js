const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/ctrlWorkouts');

router.get('/workouts/new', workoutsCtrl.newWorkout);
router.post('/workouts', workoutsCtrl.createWorkout);
// router.post('/schedules/new/workouts', workoutsCtrl.addWorkoutToSchedule);

module.exports = router;
