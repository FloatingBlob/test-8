import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle.js";

export default function NavBar ({ setDarkMode, darkMode }) {
    const icon = "/assets/icon.png";
    return (
        <nav>
            <ul>
                <li>
                    <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">
                        <img src={icon} className="icon" alt="hack club" />
                    </a>
                </li>
                <li>
                    <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
                </li>
            </ul>
        </nav>
    )
}
  