import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './App.css';

import Navbar from './Navbar/Navbar.js';
import Feed from './Feed/Feed.js';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route path="/" component={Feed} />
    </HashRouter>
  );
}

export default App;
