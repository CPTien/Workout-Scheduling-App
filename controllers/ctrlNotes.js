const Workout = require('../models/modelWorkout');


// function create(req, res) {
//     // Find the movie to embed the review within
//     Movie.findById(req.params.id, function (err, movie) {

//         // Add the user-centric info to req.body (the new review)
//         req.body.user = req.user._id;
//         req.body.userName = req.user.name;
//         req.body.userAvatar = req.user.avatar;

//         // Push the subdoc for the review
//         movie.reviews.push(req.body);
//         // Always save the top-level document (not subdocs)
//         movie.save(function (err) {
//             res.redirect(`/movies/${movie._id}`);
//         });
//     });
// }

// function deleteReview(req, res, next) {
//     Movie.findOne({'reviews._id': req.params.id}).then(function (movie) {
//         const review = movie.reviews.id(req.params.id);
//         if (!review.user.equals(req.user._id)) return res.redirect(`/movies/${movie._id}`);
//         review.remove();
//         movie.save().then(function () {
//             res.redirect(`/movies/${movie._id}`);
//         }).catch(function (error) {
//             return next(error);
//         })
//     })
// }


module.exports = {
    // create,
    // delete: deleteReview
};