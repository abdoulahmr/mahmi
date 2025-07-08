import "../../assets/section-two.css";

function SectionTwo(){
    return (
        <div className="section-two">
            <div className="section-two-text">
                <label className="section-two-label">What we do</label>
                <h1 className="section-two-title">Complete And Effective Protection For Your Home And Office </h1>
            </div>
            <div className="section-two-cards-container">
                <div className="section-two-card">
                    <img src="/Effective-sec-item-img1.png" alt="Card Image" className="section-two-card-image" />
                    <h2 className="section-two-card-title">Cybersecurity</h2>
                    <p className="section-two-card-description">Protect your digital assets with our comprehensive cybersecurity solutions.</p>
                </div>
                <div className="section-two-card">
                    <img src="/Effective-sec-item-img2.png" alt="Card Image" className="section-two-card-image" />
                    <h2 className="section-two-card-title">Data Protection</h2>
                    <p className="section-two-card-description">Ensure the safety and integrity of your data with our advanced protection services.</p>
                </div>
                <div className="section-two-card">
                    <img src="/Effective-sec-item-img3.png" alt="Card Image" className="section-two-card-image" />
                    <h2 className="section-two-card-title">Incident Response</h2>
                    <p className="section-two-card-description">Swift and effective response to security incidents to minimize impact.</p>
                </div>
                <div className="section-two-card">
                    <img src="/Effective-sec-item-img4.png" alt="Card Image" className="section-two-card-image" />
                    <h2 className="section-two-card-title">Compliance Support</h2>
                    <p className="section-two-card-description">Assistance with regulatory compliance to ensure your business meets industry standards.</p>
                </div>
            </div>
            <div className="section-two-button-container">
                <button className="section-two-button">Learn More</button>
            </div>
        </div>
    );
}

export default SectionTwo;