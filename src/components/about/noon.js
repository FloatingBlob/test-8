import React from "react";
import "./noon.css";

export default function About() {
    const ihwa = "/assets/ihwa.png";

    return(
        <div className="about">
            <div className="left">
                <img src={ihwa} className="about-img" alt="ihwa"/>
            </div>
            <div className="right">
                <div>
                    <p className="title"><b>More <span className="highlight">about</span> me</b></p>
                    <br />
                    <p>My name is <span className="highlight">Job</span> and I'm <span className="highlight">78</span> years old.</p>
                    <p onClick={() => alert("Hey girl are you africa?\nBecause Djibouti is making me crazy.")}>I live in <span className="highlight">Djibouti City</span> located in <span className="highlight">Djibouti</span>.</p>
                    <br />
                    <p>I like to think of myself as:</p>
                    <p className="indent-text">- <span className="highlight">#2</span> island royale player</p>
                    <p className="indent-text">- A <del>good</del> programmer</p>
                    <p className="indent-text">- King of <span className="highlight">Nothing</span></p>
                </div>
            </div>
        </div> 
    )
}