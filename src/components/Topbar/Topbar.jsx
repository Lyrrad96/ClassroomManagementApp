import React from 'react';
import "./Topbar.scss"
import Elements from './Elements';
//import  { useState, useEffect } from 'react';

export default function Topbar() {
	const topbar = [
        {
            id: "home",
            ahref: "#home",
            title: "Home",

        },
        {
            id: "contact",
            ahref: "#Contact",
            title: "Contact",

        },
        {
            id: "features",
            ahref: "#Features",
            title: "Features",

        },
        {
            id: "howto",
            ahref: "#Howto",
            title: "How nyes to",

        },
        {
            id: "login",
            ahref: "#Login",
            title: "Login/Sign Up",

        }

    ];
//	const [result, setResult] = useState("ye");

	return (
		
		<div className="topbar">
			<div className="wrapper">
				<div className="left">
			<a href="#home">logo</a>
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
