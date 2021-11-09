const mongoose = require('mongoose');

const Schema = mongoose.Schema

const timetableSchema = new Schema({
    userid: {
        type: String,
        required: true,
    },
    classes: [{
        Monday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
        Tuesday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
            Wednesday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
            Thursday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
            Friday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
            Saturday: [{
            Period1: {
                type: String,
            },
            Period2: {
                type: String,
            },
            Period3: {
                type: String,
            },
            Period4: {
                type: String,
            },
            Period5: {
                type: String,
            },
            Period6: {
                type: String,
            },
            Period7: {
                type: String,
            },
            Period8: {
                type: String,
            },
        }],
    }],
    section: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})


const TT = mongoose.model('Timetable', timetableSchema)

module.exports = TT;