module.exports = function isLoggedIn(req, res, next) {
    // if you say who are, first let's make sure,
    // and then pass that information to the next url
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}