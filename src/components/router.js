const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('./Signup/signup')


var mongojs = require("mongoose");
var db = mongojs('127.0.0.1:27017/Timetable');

console.log(signUpTemplateCopy)
router.post('/signup', (request, response) =>{
const signedUpUser = new signUpTemplateCopy({
    fullName:request.body.fullName,
    username:request.body.username,
    email:request.body.email,
    password:request.body.password,
})
signedUpUser.save()
.then(data =>{
    response.json(data)
})
.catch(error =>{
    response.json(error)
})
})


module.exports = router