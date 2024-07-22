import React, { useState, useEffect } from 'react'
import './Button.css';
function Button({onChangeMessage}) {
  return (
    <button className={`btn ${active? "active" : ""}`} onClick={()=>onChangeMessage("message from react")}>React Button</button>
  )
}

export default Button;