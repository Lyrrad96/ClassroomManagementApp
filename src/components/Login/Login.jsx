import React, { Component, useState } from "react";
import axios from 'axios'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";

/*const mongoose = require('mongoose')
const signUpTemplate = new mongoose.Schema({
  fullname: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})
module.exports = mongoose.model('mytable', signUpTemplate)
*/
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username:this.state.username, 
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));


    this.setState({
      username: '',
    })
      
    
  }
render(){
  return(
    <div className="Login ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required className="form-control" defaultValue={this.state.username} onChange={this.onChangeUsername}/>
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  )
}
}