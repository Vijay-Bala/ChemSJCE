import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const staticContent = [
    {
      heading: "Department Of<br/>Chemical Engineering Offers a summer internship by the best professionals. &<br/> From 15th April to 24th May",
      text: [
        "Courses Offered",
        "- Web Development",
        "- UI/UX",
        "- Poster Designing",
        "- Cyber Security",
        "- Game Development",
        "- Python Programming",
      ],
      link: "https://forms.gle/GAhmK6GXTJVnuFUFA",
      buttonText: "Register Now",
    },
  ];  

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust root margin based on your design
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lineIndex < staticContent[currentItemIndex].text.length - 1) {
        setLineIndex((prevIndex) => prevIndex + 1);
      } else {
        setLineIndex(0);
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % staticContent.length);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [lineIndex, currentItemIndex]);

  useEffect(() => {
    if (!inView) {
      setCurrentItemIndex(0);
      setLineIndex(0);
    }
  }, [inView]);

  const [countdownTargetDate] = useState(new Date('2024-04-15T08:00:00'));
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = countdownTargetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTargetDate]);

  return (
    <div
      ref={ref}
      className={`home-container ${inView ? 'visible' : ''}`}
      style={{
        background: `url("../Assets/entrance.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: '2vh',
        marginBottom: '3vh',
        marginRight: '2vw'
      }}
    >
      <div
        className={`home-text-section with-shadow ${inView ? 'animate' : ''}`}
        style={{
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out, scale 1s ease-in-out',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px) scale(0.9)',
          backgroundColor: 'transparent', 
          padding: '20px',
          borderRadius: '10px',
          color: 'white', 
        }}
      >
        <h1 className="primary-heading" style={{ textAlign: 'center', whiteSpace: 'pre-line',
          background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', fontSize: '3vh' }}>
          Department Of</h1><h1 className="primary-heading" style={{ textAlign: 'center', whiteSpace: 'pre-line',
          background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontSize: '4vh' }}>
          Chemical Engineering <br /></h1>
        <h2 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize:'2rem', color:'#4c4c4c',
          background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontSize: '3vh' }}>
          Offers A Summer Internship By The Best Professionals. <br />
        </h2>
        <h2 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize:'2rem', color:'#4c4c4c',
          background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontSize: '3vh' }}>
          Exclusively For Students Completing Class XI & XII <br />
        </h2>
        <h3 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize:'2rem', color:'#4c4c4c',
          background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontSize: '3vh' }}>
          From 15<sup>th</sup> April to 24<sup>th</sup> May <br /></h3>
        {/* <div className="primary-text">
          {staticContent[currentItemIndex].text.slice(0, lineIndex + 1).map((line, index) => (
            <p key={index} color="black">
              {line.split('').map((letter, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    transition: `transform 1s ease-in-out ${i * 0.1}s`,
                    transform: inView ? 'translateX(0)' : 'translateX(100%)',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >
                  {letter}
                </span>
              ))}
            </p>
          ))}
        </div> */}
        <div style={{ textAlign: 'center', fontSize: '1.5rem', color: 'black' }}>
          <h2 style={{background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',fontSize: '3vh'}}>TIME REMAINING</h2>
          <h2 style={{fontSize: '4vh'}}>{`${timeRemaining.days} days : ${timeRemaining.hours} hours : ${timeRemaining.minutes} minutes : ${timeRemaining.seconds} seconds`}</h2>
        </div>
        <button className="secondary-button" style={{padding: '2vh'}}>
          <a
            href={staticContent[currentItemIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: '2.5vh'
            }}
          >
            {staticContent[currentItemIndex].buttonText} <FiArrowRight />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;