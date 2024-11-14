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
                <li>
                    <a className="signup" href="https://forms.office.com/pages/responsepage.aspx?id=b125yC1jeEmvuRT6r4c4aYGPsWGPwBdEv7WN0CCYqxJUOVFVWktLUlpaOTJOTDZSNlFQNVdQSUtMMC4u&route=shorturl" target="_blank" rel="noopener noreferrer" >
                        <b>SIGN UP</b>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
  