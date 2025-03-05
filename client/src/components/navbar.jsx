import React, { useState } from "react";
import "./navbar.css"   
import {FaBars} from "react-icons/fa"
import {HiXMark} from "react-icons/hi2"

export const Navbar = ()  => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        <nav className="navbar">
            <div className="logo">
                <a href>MATT SULLIVAN</a>
            </div>
            
            <div className="link-container">
                <ul className={`links ${isOpen ? "active" : ""}`}>
                    <li><a>PHOTOS</a></li>
                    <li><a>PODCAST</a></li>
                    <li><a>VIDEO</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            
            </div>

            <div className="navbar-toggle">
                {isOpen ? <HiXMark onClick={toggleMenu}/>: <FaBars onClick={toggleMenu}/>}
            </div>
          
            
        </nav>
    )
}