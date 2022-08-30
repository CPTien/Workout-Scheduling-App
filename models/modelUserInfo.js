const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({ // need to edit this later
    content: String,
    // user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

const userInfoSchema = new Schema({
    day: {type: String},
    sets: {type: Number},
    reps: {type: Number},
    weight: {type: Number},
    workout: {
        type: Schema.Types.ObjectId,
        ref: 'Workout',
    },
    notes: [noteSchema]
}, {
    timestamps: true    
});

module.exports = mongoose.model('UserInfo', userInfoSchema);