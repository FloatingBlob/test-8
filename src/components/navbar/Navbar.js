import React from "react";
import "./Navbar.css";
import ToggleTheme from "./ToggleTheme.js";
import ToggleMusic from "./ToggleMusic.js";
import { CiCircleInfo } from "react-icons/ci";

export default function NavBar ({ setDarkMode, darkMode, isMuted, toggleMute }) {
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
                    <ToggleMusic isMuted={isMuted} toggleMute={toggleMute} />
                </li>
                <li >
                    <a href="#FAQ"> <CiCircleInfo /></a>
                </li>
                <li>
                    <ToggleTheme setDarkMode={setDarkMode} darkMode={darkMode} />
                </li>
            </ul>
        </nav>
    )
}
  