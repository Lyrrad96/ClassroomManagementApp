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
           
        }],
        Sunday:{type:Array},
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
/*{
  "userid": "7B",
  "classes": 
           
  {
          "Monday": {
            "Period1": "WPL",
              "Period2": "WPL",
              "Period3": "WPL",
              "Period4": "EL-5",
              "Period5": "ML",
              "Period6": "ES",
              "Period7": "-"
          },
          "Tuesday": {
            "Period1": "ES",
              "Period2": "ML",
              "Period3": "-",
              "Period4": "EL-6",
              "Period5": "-",
              "Period6": "-",
              "Period7": "LE"
          },
              "Wednesday": {
             "Period1": "-",
              "Period2": "-",
              "Period3": "-",
              "Period4": "EL-6",
              "Period5": "LE",
              "Period6": "-",
              "Period7": "-"
              
          },
              "Thursday": {
             "Period1": "-",
              "Period2": "-",
              "Period3": "WEB(T)",
              "Period4": "EL-5",
              "Period5": "-",
              "Period6": "OT",
              "Period7": "OT"
              
          },
          "Friday": {
             "Period1": "IE",
              "Period2": "IE",
              "Period3": "-",
              "Period4": "EL-5",
              "Period5": "ML",
              "Period6": "ES",
              "Period7": "OT"
              
          },
          "Saturday": {
              "Period1": "-",
              "Period2": "-",
              "Period3": "EL-6",
              "Period4": "LE",
              "Period5": "-",
              "Period6": "-",
              "Period7": "-"
              
          }
      },
      "section": "7C"
     
}
    */