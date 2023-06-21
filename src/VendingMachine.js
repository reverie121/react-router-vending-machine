import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './VendingMachine.css';

// Shows a page with a list of snacks that you can get from the vending machine.
// By clicking on an item in the VendingMachine you can view one of the snacks inside of the machine. Clicking should update the URL and show the snack that you’ve clicked on.

function VendingMachine() {
    return(
        <div className="VendingMachine">
            <p><Link to="/candybar">Candybar!</Link></p>
            <p><Link to="/chips">Chips!</Link></p>
            <p><Link to="/soda">Soda!</Link></p>
        </div>
    )
}

export default VendingMachine