const Workout = require('../models/modelWorkout');
const Schedule = require('../models/modelSchedule');

function index(req, res) {
  Schedule.find({}, function(err, schedules) {
    res.render('schedules/index', { title: 'Schedule', schedules });
  });
}

//this function is used for showing the details page
function show(req, res) {
  Schedule.findById(req.params.id, function (err, schedule) {
    res.render("schedules/show", { title: "Workout Detail", schedule });
  });
}

function newSchedule(req, res) {
  res.render('schedules/new', { title: 'Add Workout' });
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
  Schedule.findOne({_id: req.params.id}, function(err, schedule) {
    if (err || !schedule) return res.redirect('/schedules');
    res.render('schedules/edit', {title: "Edit Schedule", schedule});
  });
}

// this function lets user update the edited schedule
function updateSchedule(req, res) {
  Schedule.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    function(err, schedule) {
      if (err || !schedule) return res.redirect('/schedules');
      res.redirect(`/schedules/${schedule._id}`);
    }
  );
}

function deleteSchedule(req, res) {
  Schedule.findOneAndDelete(
    {_id: req.params.id}, function(err) {
      res.redirect('/schedules');
    }
  );
}

module.exports = {
    index,
    show,
    newSchedule,
    addToSchedule,
    editSchedule,
    updateSchedule,
    deleteSchedule,
};
