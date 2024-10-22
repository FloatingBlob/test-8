import React from "react";
import "./midnight.css";

export default function Other() {
    const donttouchme = "/assets/donttouchme.png";

    return (
        <div className="other">
            <div className="left">
                <div>
                    <p className="title"><b><span className="highlight">Agenda</span></b></p>
                    <p>Doors open</p>
                    <p>Opening ceremony</p>
                    <p>Lunch</p>
                    <p>Start working on your game</p>
                    <p>Gamedev workshop 1</p>
                    <p>Activity 1</p>
                    <p>Gamedev workshop 2</p>
                    <p>Dinner</p>
                    <p>Lightning talks</p>
                    <p>Midnight surprise</p>
                    <p>Dinner</p>
                    <p>Dinner</p>
                    <p>Dinner</p>
                </div>
            </div>
            <div className="middle">
                <div>
                    <p className="title"><b><span className="highlight">Times</span></b></p>
                    <p>11:00 AM</p>
                    <p>12:00 PM</p>
                    <p>12:30 PM</p>
                    <p>1:00 PM</p>
                    <p>2:00 PM</p>
                    <p>4:00 PM</p>
                    <p>4:00 PM</p>
                    <p>6:00 PM</p>
                    <p>8:00 PM</p>
                    <p>12:00 AM</p>
                    <p>6:00 PM</p>
                    <p>6:00 PM</p>
                    <p>6:00 PM</p>
                </div>
            </div>
            <div className="right">
                <p className="title"><b><span className="highlight">FAQ</span></b></p>
            </div>
        </div>
    );
}
