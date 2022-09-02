var express = require('express');
const router = express.Router();
const passport = require('passport');

// GET home page
router.get('/', function(req, res, next) {
  res.redirect('/schedules');
});

// Google login
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

// Google OAuth callback route
router.get('/auth/google/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/schedules',
    failureRedirect : '/schedules'
  }
));

// Google logout
router.get('/logout', function (req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/schedules');
  });
});

module.exports = router;
