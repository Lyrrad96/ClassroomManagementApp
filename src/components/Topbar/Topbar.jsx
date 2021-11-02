import React from 'react';
import "./Topbar.scss"
import Elements from './Elements';
import { Link } from 'react-router-dom';
//import  { useState, useEffect } from 'react';

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
            ahref: "/Features",
            title: "events",

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
//	const [result, setResult] = useState("ye");

	return (
		
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
			<Link to="/">logo</Link>
			</div>
			<div className="right"><ul >
							{topbar.map((item) => (
							<Elements  title={item.title}
							ahref={item.ahref}
							/*active={result === item.id}
							setResult={setResult}*/
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
