import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <h3>MY site</h3>
                <p>Building modern web experiences</p>
            </div>

            <div className="footer-link">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    )
}

export default Footer;