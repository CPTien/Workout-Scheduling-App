const Workout = require('../models/modelWorkout');
const Schedule = require('../models/modelSchedule');


function index(req, res) {
  Schedule.find({}, function(err, schedules) {
    res.render('schedules/index', { title: 'All Schedules', schedules });
  });
}

// this function is used for showing the details page
// function show(req, res) {
//   // Find the cast that belongs to the movie
//   Movie.findById(req.params.id)
//     .populate('cast').exec(function(err, movie) {
//       Performer.find(
//         {_id: {$nin: movie.cast}},
//         function(err, performers) {
//             res.render('movies/show',{
//               title : 'Movie Detail', // this is H1 tag
//               movie, // this will have all the actors
//               performers // this will the actors that not in the movie
//             });
//         }
//       );
//     });
// }

function newSchedule(req, res) {
  res.render('schedules/new', { title: 'Add Schedule' });
}

// this function creates a new workout and add it to database
function addToSchedule(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const schedule = new Schedule (req.body);
  schedule.save(function(err) {
    if (err) return res.redirect('/schedules/new');
    res.redirect(`/schedules/${schedule._id}`);
  });
}


module.exports = {
    index,
    // show,
    newSchedule,
    addToSchedule,
};