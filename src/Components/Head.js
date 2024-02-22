import React, { useEffect, useState } from 'react';
import clg from '../Assets/clg.png';
import clg2 from '../Assets/clgbg.png';

const Head = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: '20vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={isMobileView ? clg2 : clg}
        alt="CLG Logo"
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Head;
