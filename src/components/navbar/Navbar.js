import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle.js";

export default function NavBar ({ setDarkMode, darkMode }) {
    const icon = "/assets/icon.png";
    return (
        <nav>
            <ul>
                <li>
                    <a href="#dawn"><img src={icon} className="icon" alt="Floor of philosophy icon" /></a>
                </li>
                <li>
                    <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
                </li>
            </ul>
        </nav>
    )
}
  