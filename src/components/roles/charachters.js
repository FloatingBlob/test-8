import React from "react";
import "./charachters.css";
import { useFlipCard } from "../../hooks/flip.js";

export default function Roles() {
    const coder = "/assets/coder.png";
    const artist = "/assets/artist.png";
    const musician = "/assets/musician.png";
    useFlipCard();

    return(
        <div className="achievements">
            <div className="background">
                <div className="layout">
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={coder} alt="steam" /></div>
                            <div className="back"><p>I am the one who codes</p></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={artist} alt="white moonflower" /></div>
                            <div className="back"><p>I am the one who paints</p></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={musician} alt="wordle" /></div>
                            <div className="back"><p>I am the one who jams</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}