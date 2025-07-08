import React from 'react';
import "../../assets/section-one.css";

function SectionOne() {
    return (
        <div className="section-one">
            <div className="hero-image">
                <img src="/informationmain-left-sec-img.png" alt="Hero" className="hero-img" />
            </div>
            <div className="section-one-text">
                <label className="section-one-label">Who we are</label>
                <h1 className="section-one-title">Reduce Risk of Your Workflow Be Productive </h1>
                <p className="section-one-description">
                    We are a leading cybersecurity company dedicated to protecting your digital assets with cutting-edge technology and expert solutions.
                </p>
                <ul className="section-one-list">
                    <li className="section-one-list-item">24/7 Monitoring</li>
                    <li className="section-one-list-item">Threat Intelligence</li>
                    <li className="section-one-list-item">Incident Response</li>
                    <li className="section-one-list-item">Compliance Support</li>
                </ul>
            </div>
        </div>
    );
}

export default SectionOne;
