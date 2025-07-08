import React from 'react';
import "./../assets/hero.css";

function Hero() {
    return (
        <div className='hero-wrapper'> {/* New wrapper div */}
            <div className='hero-container'>
                <div className='hero-text'>
                    <h1 className='hero-title'>24/7 Cybersecurity Operation Center </h1>
                    <p className='hero-description'>
                        Your one-stop solution for all your needs. Explore our services and discover how we can help you achieve your goals.
                    </p>
                    <div className='hero-buttons'>
                        <button className='hero-button'>Get Started</button>
                        <button className='hero-button'>Contact Us</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src="/banner-right-img.png" alt="Hero" className='hero-img' />
                </div>
            </div>
        </div>
    );
}

export default Hero;