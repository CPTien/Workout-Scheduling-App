const Workout = require('../models/modelWorkout');
const Schedule = require('../models/modelSchedule');

// this function creates a new workout and add it to database
function createWorkout(req, res) {
  Workout.create(req.body, function (err, workout) {
    res.redirect('workouts/new');
  });
}

// this function finds the workout added from function up top and render it in current page
function newWorkout(req, res) {
  Workout.find({}, function (err, workouts) {
    res.render('workouts/new', {
      title: 'Add Workout', // this is the H1 tag, or the page title 
      workouts
    });
  });
}

// this function if for adding the workouts created here to schedules/new page
// function addWorkoutToSchedule(req, res){
//   Schedule.findById(req.params.id, function(error, schedule){
//     schedule.workout.push(req.body.workoutId);
//     schedule.save(function(error){
//       res.redirect(`/schedules`);
//     });
//   });
// }


module.exports = {
  newWorkout,
  createWorkout,
};