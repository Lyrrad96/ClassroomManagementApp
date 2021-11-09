import React, { Component, useState } from "react";
import axios from 'axios'

import "./Signup.scss";
import { Link } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeTeacher = this.onChangeTeacher.bind(this);
    //this.onChangeSection = this.onChangeSection.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      fullname: '',
      class: 0,
      teacher: "off",
     //section: '',
      //users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username:e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password:e.target.value
    })
  }
  onChangeFullName(e) {
    this.setState({
      fullname:e.target.value
    })
  }
  onChangeClass(e) {
    this.setState({
      class:e.target.value
    })
  }
  onChangeSection(e) {
    this.setState({
      section:e.target.value
    })
  }
  onChangeTeacher(e) {
    this.setState({
      teacher:e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      username:this.state.username, 
      password: this.state.password,
      fullname: this.state.fullname,
      class: this.state.class,
      section: this.state.section,
      teacher: this.state.teacher,
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));


    this.setState({
      username: '',
      password: '',
      fullname: '',
      class: 0,
      section: '',
    })
      
    
  }
render(){
  return(
    <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required placeholder="Create a UserName" onChange={this.onChangeUsername}/><br />
          <label>Password: </label>
          <input type="password" required placeholder="Create a Password" onChange={this.onChangePassword}/><br />
          <label>Fullname: </label>
          <input type="text" required placeholder="Full Name" onChange={this.onChangeFullName}/><br />
          <label>Class: </label>
          <input type="number" required placeholder="Class" onChange={this.onChangeClass}/><br />
          <input type="checkbox" label="teacher" onChange={this.onChangeTeacher}/> teacher
          
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary"/>heh
        </div>
        <Link to="/Signin">Sign In</Link>
      </form>
    </div>
  )
}
}