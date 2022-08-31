const Workout = require('../models/modelWorkout');
const Schedule = require('../models/modelSchedule');


function index(req, res) {
  Schedule.find({}, function(err, schedules) {
    res.render('schedules/index', { title: 'All Schedules', schedules });
  });
}

//this function is used for showing the details page
function show(req, res) {
  Schedule.findById(req.params.id, function (err, schedule) {
    res.render("schedules/show", { title: "Schedule Detail", schedule });
  });
}

function newSchedule(req, res) {
  res.render('schedules/new', { title: 'Add Schedule' });
}

// this function creates a new workout and add it to database
function addToSchedule(req, res) {
  const schedule = new Schedule (req.body);
  schedule.save(function(err) {
    if (err) return res.redirect('/schedules/new');
    res.redirect(`/schedules`); //to update this one later
  });
}
// this function lets user edit schedule
function editSchedule(req, res) {

}

// this function lets user update the edited schedule
function updateSchedule(req, res) {

}


module.exports = {
    index,
    show,
    newSchedule,
    addToSchedule,
    editSchedule,
    updateSchedule,
};