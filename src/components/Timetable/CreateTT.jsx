import React, { Component, useState } from "react";
import axios from 'axios'

import "./Signin.scss";
import { Link } from 'react-router-dom';

import { useHistory ,useLocation } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  //  this.showuser = this.showuser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      fullname: '',
      clas: 0,

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

  onSubmit(e) {
    e.preventDefault()

    axios.get('http://localhost:5000/users/'+this.state.username)//+this.props.match.params.username)
    .then(response => {
      if(response.data){
        this.setState({
          username: response.data.username,
          password: response.data.password,
          fullname: response.data.fullname,
          clas: response.data.class,
          teacher: response.data.teacher,
        })
        console.log(response.data)
    
      }
    })
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
   })
   this.props.history.push('/home/'+this.state.username); 
 
}
render(){
  return(
    <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit} >
        <div className="form group">
          <label>Class: </label>
          <input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.onChangeUsername}/>
          <label>Password: </label>
          <input type="password"  className="form-control" defaultValue={this.state.password} onChange={this.onChangePassword}/>
        </div>
        <input type='text' onChange={this.searchChanged} value={this.state.search}/>
        <div className="form submit">
          <input  type="submit"  value="Create User" className="btn btn-primary"/>
        </div>
        <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  )
}
}