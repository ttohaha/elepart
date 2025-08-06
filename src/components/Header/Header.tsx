import React, { useState } from 'react'
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderNav from "./HeaderNav/HeaderNav";
import "./Header.css";
import Menu from './Menu/Menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <header>
      <HeaderTop isOpen={isOpen} toggleMenu={toggleMenu} />
      <HeaderNav />
      {isOpen && <Menu />}
      
    </header>
  );
}

export default Header;
