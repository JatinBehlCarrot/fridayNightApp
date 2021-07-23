import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="headingDiv">
                <p>Plan Your</p>
                <p>Friday evening</p>
            </div>
            <div className="scrollBtnDiv">
                <button className="scrollBtn">Scroll Down</button>
            </div>
        </header>
    )
}

export default Header;