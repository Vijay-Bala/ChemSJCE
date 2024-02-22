import React from 'react';
import busImage from '../Assets/sih.jpg';
import foodImage from '../Assets/patent.jpg';
import labImage from '../Assets/high.png';

const Aboutclg = () => {
  const features = [
    { title: '9 Prizes in SIH & Other National Hackathons in the recent years', image: busImage, link: 'https://stjosephs.ac.in/facility/transport.html' },
    { title: '02 patents Granted and 70 patents published in the last Three years', image: foodImage, link: 'https://stjosephs.ac.in/facility/menu/monday/index.html' },
    { title: '50+ Students Studying in Abroad in last 5 years', image: labImage, link: 'https://stjosephs.ac.in/facility.html' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '7vh',
    marginBottom: '2vh',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
  };

  const titleStyle = {
    padding: '10px',
    fontSize: '1rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2vh', 
    textAlign: 'center', 
  };

  const handleHover = (index) => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)';
      } else {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)';
      }
    });
  };

  return (
    <div>
      <div style={containerStyle}>
        {features.map((feature, index) => (
            <div
              className="feature-card"
              style={cardStyle}
              onMouseOver={() => handleHover(index)}
              onMouseOut={() => handleHover(-1)}
            >
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <div style={titleStyle}>{feature.title}</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutclg;