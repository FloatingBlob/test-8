import React from "react";
import "./times.css";

export default function Agenda() {
    return (
        <div className="other">
            <div></div>
            <div className="left">
                <div>
                    <p className="title"><b><span className="highlight">Agenda</span></b></p>
                    <p>Doors Open</p>
                    <p>Theme Announcment</p>
                    <p>Hackathon Begins</p>
                    <p>Lunch (see FAQ)</p>
                    <p>Judging Begins</p>
                    <p>Dinner</p>
                    <p>Presentations Begin</p>
                    <p>Finalists Announced</p>
                    <p>Final Presentations</p>
                    <p>Winner Announced</p>
                    <p>Doors Close</p>
                </div>
            </div>
            <div className="right">
                <div>
                    <p className="title"><b><span className="highlight">Times</span></b></p>
                    <p>7:30 AM</p>
                    <p>7:45 AM</p>
                    <p>8:00 AM</p>
                    <p>12:00 PM</p>
                    <p>18:00 PM</p>
                    <p>18:00 PM</p>
                    <p>18:15 PM</p>
                    <p>18:30 PM</p>
                    <p>18:45 PM</p>
                    <p>19:45 PM</p>
                    <p>20:00 PM</p>
                </div>
            </div>
            <div></div>
        </div>
    );
}
