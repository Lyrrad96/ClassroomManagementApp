import React, { Component, useState } from "react";
import axios from 'axios'

import "./Signup.scss";
import { Link } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeClas = this.onChangeClas.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      fullname: '',
      section: '',
      semester: 0,
      clas: '',
      teacher: false,
    }
  }

  onChangeEmail(e) {
    this.setState({
      email:e.target.value
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
  onChangeSection(e) {
    this.setState({
      section:e.target.value
    })
  }
  onChangeSemester(e) {
    this.setState({
      semester:e.target.value
    })
  }
  onChangeClas(e) {
    this.setState({
      clas:e.target.value
    })
  }
  
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email:this.state.email, 
      password: this.state.password,
      fullname: this.state.fullname,
      section: this.state.section,
      semester: this.state.semester,
      clas: this.state.semester + this.state.section,
      teacher: this.state.teacher,
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
    .then(res =>{ console.log(res.data)


    this.setState({
      email: res.data.email,
      password: res.data.password,
      fullname: res.data.fullname,
      section: res.data.section,
      semester: res.data.semester,
      teacher: res.data.teacher,
      clas: res.data.clas,
    })
  });
    
  }/*
render(){
  return(
    <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required placeholder="Create a UserName" onChange={this.onChangeEmail}/><br />
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
*/

render(){
  return(
    <div className="signup" id="signup">
        <div className="left">
            <h1>Sign Up</h1>
            <form class="signup-form" onSubmit={this.onSubmit}>
                <span><label htmlFor="Email">Email</label>
                <input type="text" placeholder="Email" required onChange={this.onChangeEmail}/><br /></span>
                <span><label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" required onChange={this.onChangePassword}/><br /></span>
                <span><label htmlFor="Fullname">Fullname </label>
                <input type="text" placeholder="Full Name" required onChange={this.onChangeFullName}/><br /></span>
                <span><label htmlFor="Section">Section</label>
                <input type="text" placeholder="Section" required onChange={this.onChangeSection}/><br /></span>
                <span><label htmlFor="Semester">Semester</label>
                <input type="text" placeholder="Semester" required onChange={this.onChangeSemester}/><br /></span>
                <button className="submit">Sign Up</button>
                <p class="message1"><Link to="/Tsignup">Sign Up as a Teacher instead?</Link> </p>
                <p class="message2">Have an account? <Link to="/Signin">Sign In</Link> </p>
            </form>
        </div>
        <div className="right" style={{width: '100%'}}>
            
        </div>
    </div>
)
}
}