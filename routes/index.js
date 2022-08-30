var express = require('express');
var router = express.Router();
// const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/schedule');
});

// // Google login
// router.get('/auth/google', passport.authenticate(
//   'google',
//   {scope: ['profile', 'email']}
// ));


// // Google call back route
// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//       successRedirect: '/movies',
//       failureRedirect: '/movies'
//   }
// ));


// // Google logout
// router.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/movies');
// });

module.exports = router;
