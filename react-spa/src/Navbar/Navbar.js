import React, {useState} from 'react';
import './Navbar.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Popup from '../Popup/Popup';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
  return (
      <header className="Nav-header">
        <ul id="navbar">            
            <li className="home"><NavLink to="/news">Главная</NavLink></li>
            <li className="search"><input type="text" placeholder="Поиск"></input></li>
            <li className="sign in"><NavLink to="/login" onClick={togglePopup}>Войти</NavLink></li>
            <li className="sign out"><NavLink to="/news">Выйти</NavLink></li>
        </ul>
        {isOpen && <Popup handleClose={togglePopup} />}
      </header>
      
      
  );
}

export default Navbar;