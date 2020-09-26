import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import "./NewPostPopup.css";

const NewPostPopup = props => {
    return ( 
        <div className="NewPostPopup-box"> 
            <div className="box">
                <input 
                    type="text" 
                    placeholder="Заглавие" 
                    id="postTitle"
                />
                <textarea 
                    type="text" 
                    placeholder="Текст" 
                    id="postContent"
                />
                <button className="postButton" id="Post">Отправить</button>
                <NavLink to="/news"><button className="close postButton" onClick={props.handleClose}>Отмена</button></NavLink>
            </div>
        </div>
    )
}

export default NewPostPopup;