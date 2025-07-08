import React from 'react';
import './../../assets/section-eight.css';

function SectionEight() {
  return (
    <div className="section-eight">
      <div className="section-eight-header">
        <label className="section-eight-label">GET IN TOUCH</label>
        <h1 className="section-eight-heading">Send us a Message</h1>
      </div>
      <form className="section-eight-form">
        <div className="section-eight-input-row">
          <input type="text" placeholder="Name" className="section-eight-input" />
          <input type="email" placeholder="Email" className="section-eight-input" />
          <input type="tel" placeholder="Phone" className="section-eight-input" />
        </div>
        <textarea placeholder="Message" className="section-eight-textarea"></textarea>
        <button type="submit" className="section-eight-button">Submit</button>
      </form>
    </div>
  );
}

export default SectionEight;