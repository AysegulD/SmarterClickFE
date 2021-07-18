import React from 'react';
import './style.css';
import smarterlogo from '../images/smarterclicklogo.png';

function Header() {
  return(
    <header className="heading">
      <img src={smarterlogo} alt="logo"/>
    </header>    
   )
 }

export default Header;