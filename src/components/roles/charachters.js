import React from "react";
import "./charachters.css";
import { useFlipCard } from "../../hooks/flip.js";

export default function Roles() {
    const coder = "/assets/coder.png";
    const artist = "/assets/artist.png";
    const musician = "/assets/musician.png";
    const back = "/assets/back.png";
    useFlipCard();

    return(
        <div className="charachters">
            <div className="layout">
                <div className="box">
                    <div className="card">
                        <div className="front">
                            <img src={back} alt="back" />
                            <p className="flip">Flip me!</p>
                        </div>
                        <div className="back">
                            <img src={coder} alt="coder" />
                            <p>I alone am the coder.</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front">
                            <img src={back} alt="back" />
                            <p>Flip me!</p>
                        </div>
                        <div className="back">
                            <img src={artist} alt="artist" />
                            <p>I am the one who paints.</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front">
                            <img src={back} alt="back" />
                            <p>Flip me!</p>
                        </div>
                        <div className="back">
                            <img src={musician} alt="musician" />
                            <p>I am the one who jams.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reference">
                <a className="bao" href="https://www.instagram.com/baobuntian/" target="_blank" rel="noopener noreferrer">Bao Tian</a>
                <a className="dish" href="https://www.youtube.com/channel/UCzRYgazdbTdOB9WOqhTAWbQ" target="_blank" rel="noopener noreferrer">TheDishLasagne</a>
            </div>
        </div>
    )
}