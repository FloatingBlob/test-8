import React from "react";
import "./description.css";

export default function Description() {
    const jolly1 = "/assets/jolly1.png";

    return(
        <div className="about">
            <div className="left">
                <div>
                    <p className="title"><b>What is <span className="highlight">Hacktivate</span>?</b></p>
                    <p>Welcome to <span className="highlight">Hacktivate</span>, QE’s first ever hackathon! Interested in coding and making? Well this is the perfect opportunity for you!</p>
                    <br />
                    <p><span className="highlight">Hacktivate QE</span> is a 12 hour competition where you compete in teams to make the best game you can. And you don’t need to be a programmer, 
                    <span className="highlight"> we welcome artists and musicians as well</span>, after all we encourage as much of the game design as possible to be completely original!</p>
                    <br />
                    <p>There are great prizes up for grabs and all year groups and abilities are welcome. So what are you waiting for? <span className="highlight">Sign up now!</span></p>
                </div>
            </div>
            <div className="right">
                <img src={jolly1} className="about-img" alt="fun times"/>
            </div>
        </div> 
    )
}