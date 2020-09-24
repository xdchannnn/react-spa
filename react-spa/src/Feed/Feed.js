import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

  function Feed() {
    return (
        <div id="content">
            <ul id="news">
                <li class="article">blablah</li>
                <li class="article">blablah</li>
                <li class="article">blablah</li>
            </ul>
        </div>
    );
  }
  
  export default Feed;