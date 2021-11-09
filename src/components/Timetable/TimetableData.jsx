import React, { Component, useState } from "react";
import axios from 'axios'

//import "./Signin.scss";
import { Link } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeMon1 = this.onChangeMon1.bind(this);
    this.onChangeMon2 = this.onChangeMon2.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        userid: "workpls",
        classes: [{
            Monday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
            Tuesday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
                Wednesday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
                Thursday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
            Friday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
            Saturday: [{
                Period1: "No Class",
                Period2: "No Class",
                Period3: "No Class",
                Period4: "No Class",
                Period5: "No Class",
                Period6: "No Class",
                Period7: "No Class",
                Period8: "No Class",
            }],
        }],
        section: "",
    } 
  }

  onChangeMon1(e) {
    this.setState({
        classes: [{
            Monday: [{
                Period1: "No Class",    
            }]
        }]
    })
  }

  onChangeMon2(e) {
    this.setState({
        classes: [{
            Monday: [{
                Period2: "No Class",    
            }]
        }]
    })
  }

  onChangePassword(e) {
    this.setState({
      password:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

  
    axios.get('http://localhost:5000/timetables/tt/'+this.state.userid)
    .then(response => {
      if(1){
        this.setState({
            userid: response.data.userid,
            classes: [{
                Monday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,
                    Period8: response.data.Period8,
                }],
                Tuesday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,
                    Period8: response.data.Period8,
                }],
                    Wednesday: [{
                        Period1: response.data.Period1,
                        Period2: response.data.Period2,
                        Period3: response.data.Period3,
                        Period4: response.data.Period4,
                        Period5: response.data.Period5,
                        Period6: response.data.Period6,
                        Period7: response.data.Period7,
                        Period8: response.data.Period8,
                }],
                    Thursday: [{
                        Period1: response.data.Period1,
                        Period2: response.data.Period2,
                        Period3: response.data.Period3,
                        Period4: response.data.Period4,
                        Period5: response.data.Period5,
                        Period6: response.data.Period6,
                        Period7: response.data.Period7,
                        Period8: response.data.Period8,
                }],
                Friday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,
                    Period8: response.data.Period8,
                }],
                Saturday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,
                    Period8: response.data.Period8,
                }],
            }],
            section: response.data.section,
        } 
        )
        console.log(response.data.classes[0].Monday[0].Period1)
        console.log("response.data")
      }
    })
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
    })
 

  
}
render(){
  return(
    <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form group">
          <label>Username: </label>
          <input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.onChangeMon1}/>
          <label>Password: </label>
          <input type="password"  className="form-control" defaultValue={this.state.password} onChange={this.onChangePassword}/>
          <h3>{this.state.password}</h3><input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.toHome}/>
        </div>
        <input type='text' onChange={this.searchChanged} value={this.state.search}/>
        <div className="form submit">
          <input type="submit"  value="Create User" className="btn btn-primary"/>
        </div>
        <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  )
}
}