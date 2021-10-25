import React from 'react'
import "./Elements.scss"

export default function Elements({ title, ahref, active, setResult }) {
  return (
    <li 
      className={active ? "elements active" : "elements"}
  onClick={() => setResult(ahref)}
    >
      <a href={ahref}>{title}</a>
      
    </li>
  );
}