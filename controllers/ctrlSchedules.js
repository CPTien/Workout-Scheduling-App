const Workout = require('../models/modelWorkout');
const Schedule = require('../models/modelSchedule');


// function index(req, res) {
//   Movie.find({}, function(err, movies) {
//     res.render('movies/index', { title: 'All Movies', movies });
//   });
// }

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

// function newMovie(req, res) {
//   res.render('movies/new', { title: 'Add Movie' });
// }

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   const movie = new Movie(req.body);
//   movie.save(function(err) {
//     if (err) return res.redirect('/movies/new');
//     res.redirect(`/movies/${movie._id}`);
//   });
// }


module.exports = {
    // index,
    // show,
    // new: newMovie,
    // create
};