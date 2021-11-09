import React, { Component, useState } from "react";
import axios from 'axios'

import "./Home.scss";
import { Link } from 'react-router-dom';


export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  //  this.showuser = this.showuser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    axios.get('http://localhost:5000/users/'+this.getUrl())//+this.props.match.params.username)
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
    this.state = {
      username: '',
      password: '',
      fullname: '',
      clas: 0,
    }
  }
getUrl(){
    let url = window.location.href.split('/')
    return url[url.length-1]
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

    axios.get('http://localhost:5000/users/'+this.getUrl())//+this.props.match.params.username)
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
    })/*
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
   })
  */
//   this.props.history.push('/home'); 
  }
render(){
  return(
    <div className="Signin ">
        {console.log(this.getUrl())}        
      <h3>{this.state.username}</h3>  <h3>{this.state.clas}</h3>  <h3>{this.state.section}</h3>
      <form onSubmit={this.onSubmit} >
        <div className="form group">
          <label>Username: </label>
          <input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.onChangeUsername}/>
          <label>Password: </label>
          <input type="password"  className="form-control" defaultValue={this.state.password} onChange={this.onChangePassword}/>
        </div>
        <input type='text' onChange={this.searchChanged} value={this.state.search}/>
        <div className="form submit">
          <input  type="submit" id="/Signup" name="/Signup" value="Create User" className="btn btn-primary"/>
          <Link to="/Signup"  value="Create User" className="btn btn-primary">ok</Link>
        </div>
        <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  )
}
}