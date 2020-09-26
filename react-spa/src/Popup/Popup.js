import React, { useState } from "react";
import './Popup.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

const Popup = props => {
    return (
        <div className="popup-box"> 
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><NavLink to="/news">x</NavLink></span> {/*handleClose is inside Navbar.js*/}
                <input type="text" placeholder="Логин" className="input login"></input>
                <input type="text" placeholder="Пароль" className="input password"></input>
                <button id="log-in">Войти</button>
            </div>
        </div>
    )
}

export  default Popup;