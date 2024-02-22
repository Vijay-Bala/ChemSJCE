import React, { useState, useEffect } from 'react';
import image01 from '../Assets/01.jpeg';
import image02 from '../Assets/02.jpeg';
import image03 from '../Assets/03.jpeg';
import image04 from '../Assets/04.jpeg';
import image05 from '../Assets/05.jpeg';
import image06 from '../Assets/06.jpeg';
import image07 from '../Assets/07.png';
import image08 from '../Assets/08.png';
import image09 from '../Assets/09.jpeg';
import image10 from '../Assets/10.jpeg';
import image11 from '../Assets/11.png';
import image12 from '../Assets/12.jpeg';
import image13 from '../Assets/13.jpeg';
import image14 from '../Assets/14.jpeg';

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1);
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image09, image07, image11, image03, image04, image12, image01, image06, image05, image08, image13, image10, image02, image14];
    return images[index];
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity,
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop:'7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Highlights of Our Department</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default ImageSlider;
