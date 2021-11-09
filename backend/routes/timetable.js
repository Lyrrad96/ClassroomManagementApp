const router = require('express').Router()
let TT = require('../models/timetable.models')

router.route('/').get((req,res) => {
    TT.find()
    .then(timetables => res.json(timetables))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const userid = req.body.userid
    const classes = req.body.classes
    const section = req.body.section

    const newTT = new TT({userid, classes, section})

    newTT.save()
    .then(() => res.json('TT added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    TT.findById(req.params.id)
    .then(timetables => res.json(timetables))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/tt/:userid').get((req, res) => {
    TT.findOne({userid:req.params.userid}
        ).exec()
    .then(tt => {res.json(tt)
        //console.log(user.password)
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    TT.findByIdAndDelete(req.params.id)
    .then(() => res.json('TT deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    TT.findById(req.params.id)
    .then(timetables => {
        timetables.userid = req.body.userid;
        timetables.classes = req.body.classes;
        timetables.section = req.body.section;
    
        timetables.save()
        .then(() => res.json('TT updated!'))
        .catch(err => res.status(400).json('Error: ' + err));

    })

    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router