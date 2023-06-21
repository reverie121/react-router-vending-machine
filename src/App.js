import React from 'react';
import { BrowserRouter, NavLink, Route } from "react-router-dom/cjs/react-router-dom.min";

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Candybar from "./Candybar";
import Chips from "./Chips";
import Soda from "./Soda";

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/candybar">
          <Candybar />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
  );
}

export default App;