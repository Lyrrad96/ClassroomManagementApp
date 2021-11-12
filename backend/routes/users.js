const router = require('express').Router()
let User = require('../models/user.models')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const email = req.body.email
    const password = req.body.password
    const fullname = req.body.fullname
    const section = req.body.section
    const semester = req.body.semester
    const clas = semester + section
    const teacher = req.body.teacher
    
    const newUser = new User({email, password, fullname, section, semester, clas, teacher});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:email').get((req, res) => {
    User.findOne({email:req.params.email}
        ).exec()
    .then(user => {res.json(user)
        //console.log(user.password)
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router