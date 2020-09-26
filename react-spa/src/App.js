import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './App.css';

import Navbar from './Navbar/Navbar.js';
import Feed from './Feed/Feed.js';

import store from './App/store';
import { Provider } from 'react-redux';
import NewPostPopup from './Feed/NewPostPopup';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navbar />
          <Route path="/" component={Feed} />
      </HashRouter>
    </Provider>
  );
}

export default App;
