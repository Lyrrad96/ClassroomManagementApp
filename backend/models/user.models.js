const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
   password: {
        type: String,
        required: true,
       
    },
    fullname: {
        type: String,  
    },
    section: {
        type: String,
    },
    semester: {
        type: Number,
    },
    clas: {
        type: String,
    },
    teacher: {
        type: Boolean
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;