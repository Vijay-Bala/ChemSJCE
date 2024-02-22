import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    bottom: 0,
    marginLeft: '-7.5vw',
    width: '100vw', 
  };

  return (
    <footer style={footerStyle}>
      All rights reserved St. Joseph's College of Engineering | Design by <a href='https://www.linkedin.com/in/vijaybala7604/' target='_blank' style={{color: 'white'}}>VIJAY BALA A</a>
    </footer>
  );
}

export default Footer;
