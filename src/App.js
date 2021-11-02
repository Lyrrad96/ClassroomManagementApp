import React from 'react'

import "./App.scss"
import Topbar from './components/Topbar/Topbar'
//import Game from './components/game/Game'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './components/Signin/Signin'
import Timetable from './components/Timetable/Timetable'
import Details from './components/Details/Details'
import Signup from './components/Signup/Signup'
//import { Router } from 'express'

//import "bootstrap/dist/css/bootstrap.min.css"

//import Menu from './components/menu/Menu'
/*import Home from './components/home/Home'

/*
import {useState} from "react";
*/

export default function App() {
  //const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Router>
    <div className="app" >
    <Topbar/>

        <div className="sections">
         <Route path="/tt" component={Timetable}/>
         <Route path="/Features" component={Details}/>
         <Route path="/Signin" component={Signin}/>
         <Route path="/Signup" component={Signup}/>
        </div>
    </div>
    </Router>
    
  )
}

