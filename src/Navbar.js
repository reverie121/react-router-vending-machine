import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './Navbar.css';

function Navbar() {
    return(
        <nav className="Navbar">
            <NavLink exact to="/">Vending Machine</NavLink>
            <NavLink exact to="/candybar">Candybar</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
      </nav>
    )
}

export default Navbar;