import React, { Component, useState } from "react";
import axios from 'axios'

import "./Signin.scss";
import { Link } from 'react-router-dom';

import { useHistory ,useLocation } from 'react-router-dom';

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
  }/*
{this.state.users
    .filter(user => user.name.includes(this.state.search))
    .map(user => (
        <ul key={user.id} class="list-group card card-1">
            <li class="list-group-item">{user.sender.name}</li>
        </ul>
    )
)}*/
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
   this.props.history.push('/home/'+this.state.username); 
   /*
    searchChanged = event => {
      this.setState({ search: event.target.value })
  } 
    */
  
}
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
          <input  type="submit" id="/Signup" name="/Signup" value="Create User" className="btn btn-primary"/>
          <Link to="/Signup"  value="Create User" className="btn btn-primary">ok</Link>
        </div>
        <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  )
}
}
/*
componentDidMount() {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      //if(response.data.length > 0){
        this.setState({
          userlist: response.data,
          
        })
//console.log(response.data[0].username)
      //}  
      
    })
    .catch(error => console.log("Error"+error));
   /*
    searchChanged = event => {
      this.setState({ search: event.target.value })
  } 
    
  }
  userList() {
    return this.state.user.map(currentuser => {
      return <Users user={currentuser} key={currentuser.username}/>
    })
  }*/