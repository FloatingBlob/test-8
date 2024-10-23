import React from "react";
import "./home.css";

export default function Landing() {
    const title = "/assets/title.png";

    return (
        <div className="home">
            <div className="top">
                <img src={title} className="home-img" alt="counterspell"/>
            </div>

            <div className="bottom">
                <div className="content">
                    <p>QE's <span className="highlight">first ever</span> hackathon</p>
                    <p>November 23, 2024</p>
                </div>
            </div>
        </div> 
    );
}