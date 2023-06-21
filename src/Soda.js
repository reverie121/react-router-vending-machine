import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// A type of snack component. From each snack component, you should be able to go back to the main VendingMachine component.

function Soda() {
    return(
        <div className="Soda">
            <p>Go back to <Link to="/">vending machine</Link> page</p>
        </div>
    )
}

export default Soda