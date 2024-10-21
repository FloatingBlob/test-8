import React from "react";
import "./dusk.css";
import { useFlipCard } from "../../hooks/flip.js";

export default function Achievements() {
    const steam = "/assets/steam.png";
    const lunartear = "/assets/lunartear.png";
    const wordle = "/assets/wordle.png";
    useFlipCard();

    return(
        <div className="achievements">
            <div className="background">
                <div className="layout">
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={steam} alt="steam" /></div>
                            <div className="back"><p>117.3 hours over past 2 weeks, Terraria got to me</p></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={lunartear} alt="white moonflower" /></div>
                            <div className="back"><p>After many hours of breeding, behold the "Lunar Tear"</p></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="card">
                            <div className="front"><img src={wordle} alt="wordle" /></div>
                            <div className="back"><p>I love wordle</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}