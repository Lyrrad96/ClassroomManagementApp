import React, { Component, useState } from "react";
import axios from 'axios'

import "./Signin.scss";
import { Link } from 'react-router-dom';

//import { useHistory ,useLocation } from 'react-router-dom';
//import { response } from "express";

/*
const Users = props => {
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
    <td>{props.user.fullname}</td>
    <td>
      <Link to={"/edit/"+props.user.username}></Link> | <a href="#" onClick={() => {props.showuser{}}}></a>
    </td>
  </tr>
}*/
export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }/*
{this.state.users
    .filter(user => user.name.includes(this.state.search))
    .map(user => (
        <ul key={user.id} class="list-group card card-1">
            <li class="list-group-item">{user.sender.name}</li>
        </ul>
    )
)}*/
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

  onSubmit(e) {
    e.preventDefault()
/*
    const user = {
      username:this.state.username,
      password:this.state.password,
    };
  
    //console.log(user)
/*
    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));
*//*
{this.state.users
  .filter(user => user.name.includes(this.state.search))
  .map(user => (
      <ul key={user.id} class="list-group card card-1">
          <li class="list-group-item">{user.sender.name}</li>
      </ul>
  )
)}*/
//componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.state.email)//+this.props.match.params.username)
    .then(response => {
      if(response.data){
        this.setState({
          email: response.data.email,
          password: response.data.password,
          fullname: response.data.fullname,
          clas: response.data.class,
          teacher: response.data.teacher,
        })
        console.log(response.data.teacher)
        console.log("response")
        if(this.state.teacher === true)
        this.props.history.push('/tit/'); 
        else
        this.props.history.push('/tt/'); 
       /* const location = useLocation()
        console.log(location.pathname)
        
        const history = useHistory()
        console.log(history.location.pathname)
                console.log(response.data)*/
                  //yields: "https://stacksnippets.net/js"
             
      }
    })
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
   })
   console.log(this.state.teacher)

 
   /*
    searchChanged = event => {
      this.setState({ search: event.target.value })
  } 
    */
  
}/*
render(){
  return(
    <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit} >
        <div className="form group">
          <label>Username: </label>
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
}*/
render() {
  return(
    <div className="intro" id = "intro">
        <div className="signin">
            <div className="left">
                <h1>Sign In</h1>
                <form class="signin-form" onSubmit={this.onSubmit}>
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" required onChange={this.onChangeEmail}/><br />
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" required onChange={this.onChangePassword}/><br />
                    <button className="submit">Sign In</button>
                    <p class="message">Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                </form>
            </div>
            <div className="right" style={{width: '100%'}}>
               
            </div>
        </div>
    </div>
)
}
}