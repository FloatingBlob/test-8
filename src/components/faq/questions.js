import React from "react";
import "./questions.css";

export default function FAQ() {
    return (
        <div className="faq">
            <div className="layout">
                <div className="note">
                    <div className="text">
                        <p className="heading">Am I <span className="highlight">eligible</span> to sign up?</p>
                        <br />
                        <p>You have to currently be a <span className="highlight">student at QE</span> in order to attend the 
                        hackathon on <span className="highlight">23rd November</span>. However, if you are from another school 
                        and really want to take part, reach out to us through <span className="highlight">email</span>. </p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">What will it <span className="highlight">cost</span>?</p>
                        <br />
                        <p>It's <span className="highlight">free</span>!</p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">How can I <span className="highlight">contact</span> you?</p>
                        <br />
                        <p>You can contact Azlan at <a href="mailto:18bshahm@qerdp.co.uk" className="highlight"> 18bshahm@qerdp.co.uk </a> 
                        or Harik at <a href="mailto:18lsodhih@qerdp.co.uk" className="highlight"> 18lsodhih@qerdp.co.uk</a>.</p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">Can I still come if I'm not good at <span className="highlight">coding</span>?</p>
                        <br />
                        <p>This hackathon is available <span className="highlight">for all skill levels</span>! 
                        There are additional <span className="highlight">non-coding roles</span> available as well if you prefer.</p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">Will there be <span className="highlight">food</span>?</p>
                        <br />
                        <p>Dinner (<span className="highlight">pizza</span>) will be provided, but please bring a <span className="highlight">packed lunch </span>
                        as leaving school during the hackathon is not allowed. We'll do our best to accommodate <span className="highlight">dietary requirements</span>.
                        If you receive <span className="highlight">free school meals</span>, contact us directly.</p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">What should I <span className="highlight">bring</span>?</p>
                        <br />
                        <p>Bring a <span className="highlight">packed lunch</span> and a <span className="highlight">laptop</span>. You can bring 
                        any extra tools (e.g. sketchpad) if helpful, but they’re optional. 
                        We'll provide <span className="highlight">extension cables</span>, but bring your <span className="highlight">own chargers</span>. </p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">How can I <span className="highlight">sign up</span>?</p>
                        <br />
                        <p>Sign up via the Microsoft Form on <a href="https://eqe.fireflycloud.net/set-tasks/374649" target="_blank" rel="noopener noreferrer" className="highlight" >eQE </a>
                        by 3rd November. Due to high demand, places are <span className="highlight">first come, first served</span>. 
                        If the deadline has passed, <span className="highlight">email us</span> and we’ll try to accommodate you.</p>
                    </div>
                </div>
                <div className="note">
                    <div className="text">
                        <p className="heading">Do I need a <span className="highlight">team</span>?</p>
                        <br />
                        <p>It is <span className="highlight">preferred</span> that you sign up with a team so that you can compete with people you already know. 
                        However, you can also sign up <span className="highlight">on your own</span> and we’ll assign you a team. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
