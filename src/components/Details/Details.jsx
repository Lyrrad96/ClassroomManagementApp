import React, { Component, useState } from "react";
import axios from 'axios'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Details.scss";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

  }

  componentDidMount() {
    this.setState({
      users: ['bum', 'HEHE'],
      username: ['nyes']
    })
  }
  onChangeUsername(e) {
    this.setState({
      username:e.target.value
    })
  }


  onChangeDescription(e) {
    this.setState({
      username:e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      username:e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      username:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const details = {
      username:this.state.username,
      description:this.state.description,
      duration:this.state.duration,
      date:this.state.date,
    }

    console.log(details)
/*
    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

*/
window.location = '/'
      
    
  }
render(){
  return(
    <div className="Signin">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select name="" id="" ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
            {
              this.state.users.map(function(user) {
                return <option key={user} defaultValue={user}>{user}</option>;
              })
            }
          </select>
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