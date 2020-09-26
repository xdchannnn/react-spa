import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import "./Feed.css";
import NewPost from "./NewPost";
import News from './News';

  const Feed = () => {
    return (
        <div id="content">
            <NewPost />
            <News />
        </div>
    );
  }
  
  export default Feed;