const router = require('express').Router()
let User = require('../models/user.models')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    const fullname = req.body.fullname
    const clas = Number(req.body.clas)

    const newUser = new User({username, password, fullname, clas,});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:username').get((req, res) => {
    User.findOne({username:req.params.username}
        ).exec()
    .then(user => {res.json(user)
        //console.log(user.password)
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router