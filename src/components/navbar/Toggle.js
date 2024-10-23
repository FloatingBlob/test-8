import React from "react";
import { CiLight, CiDark } from "react-icons/ci";

export default function Toggle({ setDarkMode, darkMode }) {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <CiLight /> : <CiDark />}
        </button>
    );
}