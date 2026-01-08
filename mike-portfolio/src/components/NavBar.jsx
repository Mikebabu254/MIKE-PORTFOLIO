import React from "react";

function NavBar(){
    return(
        <nav className="navBar">
            <div className="logo">inkognito</div>
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