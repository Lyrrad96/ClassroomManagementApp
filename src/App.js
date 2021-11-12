import React from 'react'

import "./App.scss"
import Topbar from './components/Topbar/Topbar'
//import Game from './components/game/Game'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './components/Signin/Signin'
import Table from './components/Timetable/Table'
import Timetable from './components/Timetable/TimetableData'
import Details from './components/Details/Details'
import Signup from './components/Signup/Signup'
import Tsignup from './components/Signup/Tsignup'
import Home from './components/Home/Home'
import Home2 from './components/Home2/Home2'
//import { Router } from 'express'

//import "bootstrap/dist/css/bootstrap.min.css"

//import Menu from './components/menu/Menu'
/*import Home from './components/home/Home'

/*
import {useState} from "react";
*/
import { useLocation } from 'react-router-dom';

export default function App() {
  //const [menuOpen, setMenuOpen] = useState(false)
  /*const location = useLocation()
  const loc =  location.pathname
	console.log(loc)
  */return (
    <Router>
    <div className="app" >
    <Topbar/>
   

        <div className="sections">
   
         <Route path="/tt" component={Timetable}/>
         <Route path="/ttt" component={Table}/>
         <Route path="/Features" component={Details}/>
         <Route path="/Signin" component={Signin}/>
         <Route path="/Signup" component={Signup}/>
         <Route path="/Tsignup" component={Tsignup}/>
         <Route path="/home" component={Home}/>
         <Route path="/home2" component={Home2}/>
        </div>
    </div>
    </Router>
    
  )
}

