import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import "./Feed.css";
import Field from "./NewPostField";

const NewPost = ()  => {
    return ( 
            <Field />
    )
}

export default NewPost;