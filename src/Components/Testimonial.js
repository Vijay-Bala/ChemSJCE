import React, { useState, useEffect } from 'react';
import image01 from '../Assets/01.jpeg';
import image02 from '../Assets/02.jpeg';
import image03 from '../Assets/03.jpeg';
import image04 from '../Assets/04.jpeg';
import image05 from '../Assets/05.jpeg';
import image06 from '../Assets/06.jpeg';
import image07 from '../Assets/07.png';
import image08 from '../Assets/08.jpeg';
import image09 from '../Assets/09.jpeg';
import image10 from '../Assets/10.jpeg';
import image11 from '../Assets/11.png';
import image12 from '../Assets/12.jpeg';
import image13 from '../Assets/13.jpeg';
import image14 from '../Assets/14.jpeg';

const Testimonial = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const imageDetails = [
    "Details about image 01",
    "Details about image 02",
    "Details about image 03",
    "Details about image 04",
    "Details about image 05",
    "Details about image 06",
    "Details about image 07",
    "Details about image 08",
    "Details about image 09",
    "Details about image 10",
    "Details about image 11",
    "Details about image 12",
    "Details about image 13",
    "Details about image 14"
  ];

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
    position:"relative",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'auto',
    marginTop: '5vh',
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto',
    borderRadius: '10px',
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
    marginTop: '5vh'
  };

  const detailsStyle = {
    position:"absolute",
    bottom:0,
    left:"25%",
    width:"50%",
    marginTop: '10px',
    backgroundColor:"black",
    color:"white",
    
    height:"5%"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '3rem', marginTop: '7vh', background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', }}>Highlights</h2>
      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
      <div style={detailsStyle}>
        <p style={{backgroundColor:"black",padding:"7px 7px",}}>{imageDetails[imageIndex]}</p>
      </div>
    </div>
  );
};

export default Testimonial;