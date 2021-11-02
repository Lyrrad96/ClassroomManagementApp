import React from 'react'
import "./Game.scss"
import Elements from './Elements';
import  { useState, useEffect } from 'react';

export default function Game() {
	const list = [
		{
		  id: "r",
		  title: "r",
		  src: "assets/rock.png",
		},
		{
		  id: "p",
		  title: "p",
		  src: "assets/paper.png",
		},
		{
		  id: "s",
		  title: "s",
		  src: "assets/scissors.png",
		},
		{
		  id: "l",
		  title: "l",
		  src: "assets/lizard.png",
		},
		{
		  id: "S",
		  title: "S	",
		  src: "assets/spock.png",
		},
	  ];
	  const [result, setResult] = useState("ye");
	  //const id = addEventListene.target.id;

    return (
	
    
        <div className="game" id="game">
	<ul >
	{list.map((item) => (
          <Elements  title={item.title}
		  active={result === item.id}
		  setResult={setResult}
		  id={item.id}
		  src={item.src}/>
          
        ))}

		</ul>  
            <div className="container">
		
          
          </div>
          </div>
         
      
    
    )
}