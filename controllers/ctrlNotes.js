const Schedule = require('../models/modelSchedule');
// const Workout = require('../models/modelWorkout');


function createNote(req, res) {
    // Find the schedule to embed the review within
    Schedule.findById(req.params.id, function (err, schedule) {
        schedule.notes.push(req.body);
        // Always save the top-level document (not subdocs)
        schedule.save(function (err) {
            res.redirect(`/schedules/${schedule._id}`);
        });
    });
}

function deleteNote(req, res, next) {
    Schedule.findById(req.params.id).populate('notes').exec(function (err, notes) {
        Schedule.findByIdAndDelete(req.params.id, function (err) {
            res.redirect(`/schedules/${schedule._id}`);
        });
    });
}


module.exports = {
    createNote,
    deleteNote,
}; 