const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({ // need to edit this later
    content: String,
    // user: {type: Schema.Types.ObjectId, ref: 'User'},
    // userName: String,
    // userAvatar: String,
}, {
    timestamps: true
});

const scheduleSchema = new Schema({
    day: {type: String},
    sets: {type: Number},
    reps: {type: Number},
    weights: {type: String},
    // workout: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Workout',
    // },
    workout: {type: String},
    notes: [noteSchema]
}, {
    timestamps: true    
});

module.exports = mongoose.model('Schedule', scheduleSchema);