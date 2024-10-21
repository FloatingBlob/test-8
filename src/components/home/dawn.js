import React from "react";
import "./dawn.css";
import { useIndentToggle } from "../../hooks/indent.js";

export default function Home() {
    const zena = "/assets/zena.png";

    useIndentToggle();

    return (
        <div className="home">
            <div className="left">
                <div className="content">
                    <p>Greetings, dear <span className="highlight">guests</span>.</p>
                    <br />
                    <p className="indent-text">I'm <span className="highlight">Lazine</span><span className="hidden">ss</span></p>
                    <br />
                    <p>also known as . . .</p>
                </div>
            </div>
            <div className="right">
                <img src={zena} className="home-img" alt="zena and claw"/>
            </div>
        </div> 
    );
}