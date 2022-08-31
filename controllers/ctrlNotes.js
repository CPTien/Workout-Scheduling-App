const Schedule = require('../models/modelSchedule');
// const Workout = require('../models/modelWorkout');


function createNote(req, res) {
    // Find the schedule to embed the note within
    Schedule.findById(req.params.id, function (err, schedule) {
        
        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        schedule.notes.push(req.body);
        // Always save the top-level document (not subdocs)
        schedule.save(function (err) {
            res.redirect(`/schedules/${schedule._id}`);
        });
    });
}

function deleteNote(req, res, next) {
    Schedule.findOne({'notes._id': req.params.id}).then(function (schedule) {
        const note = schedule.notes.id(req.params.id);
        if (!note.user.equals(req.user._id)) return res.redirect(`/schedules/${schedule._id}`);
        note.remove();
        schedule.save().then(function () {
            res.redirect(`/schedules/${schedule._id}`);
        }).catch(function (error) {
            return next(error);
        })
    })
}

function updateNote(req, res) {

}


module.exports = {
    createNote,
    deleteNote,
    updateNote,
}; 