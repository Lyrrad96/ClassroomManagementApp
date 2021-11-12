import React from 'react';
import "./Topbar.scss"
import Elements from './Elements';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Topbar() {
	const topbar = [
        {
            id: "home",
            ahref: "/",
            title: "Home",

        },
        {
            id: "contact",
            ahref: "/tt",
            title: "Timetable",

        },
        {
            id: "features",
            ahref: "/tit",
            title: "table",

        },
        {
            id: "howto",
            ahref: "/Howto",
            title: "How to",

        },
        {
            id: "Signin",
            ahref: "/Signin",
            title: "Signin/Sign Up",

        }

    ];
	const [result, setResult] = useState("ye");
	const location = useLocation()
	console.log(location.pathname)
	
	return (
		
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
			<Link to="/">Classroom Management</Link>
			</div>
			<div className="right"><ul >
							{topbar.map((item) => (
							<Elements  title={item.title}
							ahref={item.ahref}
							active={result === item.id}
							setResult={setResult}
							/>
							))}

						</ul></div>
			
			</div>
		</div>
		
		
		
		/*
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<div></div>
						<ul >
							{topbar.map((item) => (
							<Elements  title={item.title}
							ahref={item.ahref}
							active={result === item.id}
							setResult={setResult}
							/>
							))}

						</ul>
				</div>
				<div className="right">
					<div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
						
						<span className="line1"> </span>
						<span className="line2"> </span>
						<span className="line3"> </span>
					</div>
				</div>
			</div>
		</div>*/
	);
}

/*
import React from "react";
import "./Topbar.scss"
import { Link } from 'react-router-dom';

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Classroom Management</a>
                </div>
                <div className="right">
                    <button className="btn Home">Home</button>
                    <a href="#signup" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Contact">SignUp</button></a>
                    <a href="#signupteacher" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Features">SignUppp</button></a>
                   <Link to="/Signin"> <button className="btn HowTo">Log out</button> </Link>
                </div>
            </div>
        </div>
    )
}*/