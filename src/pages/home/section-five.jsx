import React from 'react';
import './../../assets/section-five.css';

function SectionFive() {
  const pricingPlans = [
    {
      icon: "pricing-box-img1.png",
      name: 'Beginner',
      price: '$120',
      features: [
        'Quia voluptas sit aspern.',
        'Exercitationem ullam corois.',
        'Modi tempora incidunt.',
        'Laudantium totam rem aei.',
        'Duis aute irure dolor reae.',
      ],
    },
    {
      icon: "pricing-box-img2.png",
      name: 'Business',
      price: '$180',
      features: [
        'Quia voluptas sit aspern.',
        'Exercitationem ullam corois.',
        'Modi tempora incidunt.',
        'Laudantium totam rem aei.',
        'Duis aute irure dolor reae.',
      ],
    },
    {
      icon: "pricing-box-img3.png",
      name: 'Professional',
      price: '$200',
      features: [
        'Quia voluptas sit aspern.',
        'Exercitationem ullam corois.',
        'Modi tempora incidunt.',
        'Laudantium totam rem aei.',
        'Duis aute irure dolor reae.',
      ],
    },
  ];

return (
    <div className="section-five">
        <div className="section-five-header">
            <label className="section-five-label">WHAT WE OFFER</label>
            <h1 className="section-five-heading">Our Flexible Pricing Plans</h1>
        </div>
        <div className="section-five-cards-container">
            {pricingPlans.map((plan, index) => (
                <div className="section-five-card" key={index}>
                    <img src={plan.icon} alt={`${plan.name} Plan Icon`} className="section-five-card-icon" />
                    <h3 className="section-five-card-name">{plan.name}</h3>
                    <h4 className="section-five-card-price">
                        {plan.price} <span>/ Per Month</span>
                    </h4>
                    <ul className="section-five-features-list">
                        {plan.features.map((feature, idx) => (
                            <li key={idx}>
                                <span className="section-five-checkmark-icon" style={{ color: '#4CAF50', marginRight: 8 }}>
                                    ✓
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="section-five-button">Get started</button>
                </div>
            ))}
        </div>
    </div>
);
}

export default SectionFive;