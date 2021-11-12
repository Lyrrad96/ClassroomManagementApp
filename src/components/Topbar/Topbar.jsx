import React from 'react';
import "./Topbar.scss"
import Elements from './Elements';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Topbar() {
	const location = useLocation().pathname
	console.log(location)

	const topbar = [
        {
            id: "home",
            ahref: "/home",
            title: "Home",

        },
       /* {
            id: "contact",
            ahref: "/tt",
            title: "Timetable",

        },
        {
            id: "features",
            ahref: "/ttt",
            title: "table",

        },*/
        {
            id: "howto",
            ahref: "/home2",
            title: "Features",

        },
        {
            id: "Signin",
            ahref: "/Signin",
            title: "Signin",

        },
		{
            id: "Logout",
            ahref: "/home",
            title: "Log Out",

        }

    ];

	const [result, setResult] = useState("ye");
	
	return (
		
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
				{/*<Link to="/">Classroom Management</Link>*/}
				</div>
				<div className="right"><ul >
							{topbar.map((item) => (
							<Elements  title={item.title}
							ahref={item.ahref}
							active={result === item.id}
							setResult={setResult}
							/>
							))}

						</ul>
				</div>
			
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