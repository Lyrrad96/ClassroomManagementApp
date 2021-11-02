const mongoose = require('mongoose');
const { default: Timetable } = require('../../src/components/Timetable/Timetable');

const Schema = mongoose.Schema

const timetableSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    class: {
        type: Number,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})


const TT = mongoose.model('Timetable', timetableSchema)

module.exports = TT;