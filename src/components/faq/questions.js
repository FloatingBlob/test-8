import React from "react";
import "./questions.css";

export default function FAQ() {
    return (
        <div className="faq">
            <div className="background">
                <div className="layout">
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">Am I <span className="highlight">eligible</span> to sign up?</p>
                                <br />
                                <p>You have to currently be a <span className="highlight">student at QE</span> in order to attend the hackathon on 23rd November. 
                                <span className="highlight"> However</span>, if you are from another school and really want to take part, reach out to us <span className="highlight">through email</span>. </p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">What will it <span className="highlight">cost</span>?</p>
                                <br />
                                <p>It's <span className="highlight">free</span>!</p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">How can I <span className="highlight">contact</span> you?</p>
                                <br />
                                <p>You can contact <span className="highlight">Azlan</span> at 
                                <a href="mailto:18bshahm@qerdp.co.uk" className="highlight"> 18bshahm@qerdp.co.uk</a> or <span className="highlight">Harik </span>
                                 at <a href="mailto:18lsodhih@qerdp.co.uk" className="highlight"> 18lsodhih@qerdp.co.uk</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">Can I still come if I'm not good at <span className="highlight">coding</span>?</p>
                                <br />
                                <p>This hackathon is available <span className="highlight">for all</span> skill levels! 
                                There are <span className="highlight">additional non-coding roles</span> available as well if you prefer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">Will there be <span className="highlight">food</span>?</p>
                                <br />
                                <p>Dinner (<span className="highlight">pizza</span>) will be provided, but please bring a <span className="highlight">packed lunch </span>
                                 as leaving school during the hackathon is not allowed. We'll ask about <span className="highlight">dietary requirements </span>
                                  at signup and do our best to accommodate. If you receive free school meals, <span className="highlight">contact us directly</span>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">What should I <span className="highlight">bring</span>?</p>
                                <br />
                                <p>Bring a <span className="highlight">packed lunch</span> and a <span className="highlight">laptop</span>. 
                                You can bring any <span className="highlight">extra tools</span> (e.g. sketchpad) if helpful, but they’re <span className="highlight">optional</span>. 
                                We'll provide <span className="highlight">extension cables</span>, but bring your <span className="highlight">own chargers</span>. </p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">How can I <span className="highlight">sign up</span>?</p>
                                <br />
                                <p>Sign up via the <span className="highlight">Microsoft Form</span> on <span className="highlight">EQE</span> by 3rd November. 
                                Due to high demand, places are <span className="highlight">first come</span>, <span className="highlight">first served</span>. 
                                If the deadline has passed, <span className="highlight">email us</span> and we’ll try to accommodate you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <div className="text">
                            <div>
                                <p className="heading">Do I need a <span className="highlight">team</span>?</p>
                                <br />
                                <p>It is preferred that you sign up <span className="highlight">with a team</span> so that you can compete with people you already know. However, you can also sign up <span className="highlight">on your own</span> and we’ll assign you a team. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
