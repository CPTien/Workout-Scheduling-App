const Workout = require('../models/modelWorkout');

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

// // this function if for adding the workouts created here to schedule/new page
// function addWorkoutToSchedule(req, res){
//   Workout.findById(req.params.id, function(error, workout){
//     workout.cast.push(req.body.workoutId);
//     workout.save(function(error){
//       res.redirect(`/movies/${movie._id}`);
//     });
//   });
// }


module.exports = {
  newWorkout,
  createWorkout,
//   addWorkoutToSchedule
};