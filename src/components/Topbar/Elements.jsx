import React from 'react'
import "./Elements.scss"
import { Link } from 'react-router-dom';

export default function Elements({ title, ahref, active }) {
  return (
    <li 
      className={active ? "elements active" : "elements"}
  
    >
      <Link to={ahref}>{title}</Link>
      
    </li>
  );
}