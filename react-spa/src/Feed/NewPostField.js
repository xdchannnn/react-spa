import React, { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import "./Feed.css";
import NewPostPopup from "./NewPostPopup";

const NewPostField = ()  => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return ( 
        <NavLink to="submit">   
            <div id="newPostContainer">
                    <input type="text" id="newPost" placeholder="Написать новость" onClick={togglePopup}></input>
                    {isOpen && <NewPostPopup handleClose={togglePopup} />}           
            </div>
        </NavLink> 
    )
}

export default NewPostField;