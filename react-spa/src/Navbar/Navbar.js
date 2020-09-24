import React from 'react';
import './Navbar.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Feed from '../Feed/Feed';

function Navbar() {
  return (
      <header className="Nav-header">
        <ul id="navbar">            
            <li className="home"><NavLink to="/news">Главная</NavLink></li>
            <li className="search"><input type="text" placeholder="Поиск"></input></li>
            <li className="sign in"><NavLink to="/login">Войти</NavLink></li>
            <li className="sign out"><NavLink to="/news">Выйти</NavLink></li>
        </ul>
      </header>
      
      
  );
}

export default Navbar;