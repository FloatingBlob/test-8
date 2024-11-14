import React from "react";
import "./home.css";

export default function Landing() {
    const title = "/assets/title.gif";

    return (
        <div className="home">
            <div className="top">
                <img src={title} className="home-img" alt="title"/>
            </div>

            <div className="bottom">
                <div className="content">
                    <p><b>QE's <span className="highlight">first ever</span> hackathon</b></p>
                    <p>December 17th, 2024</p>
                </div>
            </div>
        </div> 
    );
}