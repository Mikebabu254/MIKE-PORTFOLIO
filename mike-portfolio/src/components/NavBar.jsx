import React from "react";

function NavBar(){
    return(
        <nav className="navBar">
            <div className="logo"><img src="public/incognito new logo 24 dark-01.png" alt="Logo" className="logo"></img></div>
            <ul className="nav-link">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;