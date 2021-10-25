/*import React from 'react'
import "./Home.scss"
import Elements from './Elements';
import  { useState, useEffect } from 'react';

export default function Home() {
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
            title: "How to",

        },
        {
            id: "login",
            ahref: "#Login",
            title: "Login/Sign Up",

        }

    ];
    const [result, setResult] = useState("ye");

    return (
     
               <div>
          <ul >
	{topbar.map((item) => (
          <Elements  title={item.title}
		  ahref={item.ahref}
          active={result === item.id}
		  setResult={setResult}
		  />
          
        ))}

		</ul>  </div>
     
    )
}
*/