import React, { Component } from "react";
import "./Tsignup.scss"
import { Link } from 'react-router-dom';
import axios from "axios";

//import signupvector from './signupvector.svg';

export default class Signin extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeFullName = this.onChangeFullName.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        email: '',
        password: '',
        fullname: '',
        teacher: true,
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
  
    
    onSubmit(e) {
      e.preventDefault()
  
      const user = {
        email:this.state.email, 
        password: this.state.password,
        fullname: this.state.fullname,
        teacher: this.state.teacher,
      }
  
      console.log(user)
  
      axios.post('http://localhost:5000/users/add', user)
      .then(res =>{ console.log(res.data)
  
  
      this.setState({
        email: res.data.email,
        password: res.data.password,
        fullname: res.data.fullname,
        teacher: res.data.teacher,
      })
    });
      
    }
render(){
    return(
        <div className="signupteacher" id ="signupteacher">
            <div className="left">
                <h1>Sign Up</h1>
                <form class="signup-form" onSubmit={this.onSubmit}>
                    <span><label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Email" required onChange={this.onChangeEmail}/><br /></span>
                    <span><label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" required onChange={this.onChangePassword}/><br /></span>
                    <span><label htmlFor="Fullname">Fullname </label>
                    <input type="text" placeholder="Full Name" required onChange={this.onChangeFullName}/><br /></span>
                    <button className="submit">Sign Up</button>
                    <p class="message1"><Link to="/Signup">Sign Up as a Student instead? </Link></p>
                    <p class="message2">Have an account?<Link to="/Signin">Sign in </Link></p>
                </form>
            </div>
            <div className="right" style={{width: '100%'}}>
               
            </div>
        </div>
    )
}
}