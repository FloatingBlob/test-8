import React from "react";
import "./dawn.css";

export default function Home() {
    const title = "/assets/title.png";

    return (
        <div className="home">
            <div className="top">
                <img src={title} className="home-img" alt="counterspell"/>
            </div>

            <div className="bottom">
                <div className="content">
                    <p>QE's <span className="highlight">first</span> ever <span className="highlight">game jam</span></p>
                    <p>November <span className="highlight">23</span>, 2024</p>
                </div>
            </div>
        </div> 
    );
}