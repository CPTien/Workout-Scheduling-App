// this is workout stuff

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {type: String},
    category: {type: String},
    group: {type: String},
    description: {type: String},
    img: {type: String}, // for now
}, {
    timestamps: true    
});

module.exports = mongoose.model('Workout', workoutSchema);