const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({ 
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

const scheduleSchema = new Schema({
    day: {type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]},
    sets: {type: Number},
    reps: {type: Number},
    weights: {type: String},
    // icebox items (want to let the users to chose the workouts created in the workout schema instead of typing it separately):
    // workout: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Workout',
    // }],
    workout: {type: String},
    notes: [noteSchema]
}, {
    timestamps: true    
});

module.exports = mongoose.model('Schedule', scheduleSchema);