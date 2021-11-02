import React from 'react'
import "./Elements.scss"

export default function Elements({ id, title, active, setResult, src }) {
  return (
    <li
      className={active ? "elements active" : "elements"}
      onClick={() => setResult(id)}
    >
      <img  src={src} alt="img" />
      <h3>{title}</h3>
    </li>
  );
}