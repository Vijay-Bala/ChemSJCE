import React, { useState, useEffect } from 'react';

const Video = () => {
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


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh',
    width:"90vw",
    height:"70vh",
  };

  
  return (
    <div style={containerStyle}>
      
            <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '100%',width:"75%"  }}>
            <iframe width="100%"
            height="100%" src="https://www.youtube.com/embed/oCgd1q5yknE?si=5pyIt19kfisVtMsN&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  );
};

export default Video;