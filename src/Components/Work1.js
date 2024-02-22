import React from 'react';
import { LoopCircleSlider } from 'react-looped-carousel';
import 'react-looped-carousel/lib/style.css';
import webImage from '../Assets/web.jpg';
import uiuxImage from '../Assets/uiux.png';
import posterImage from '../Assets/poster.png';
import pythonImage from '../Assets/python.jpg';
import cyberImage from '../Assets/cyber.jpg';
import gameImage from '../Assets/game.jpg';

const courses = [
    {
      title: 'WEB DEVELOPMENT',
      image: webImage,
      description: `
        Learn the fundamentals of web development and build modern websites.
        Explore HTML, CSS, JavaScript, and popular web frameworks.
        Get hands-on experience with real-world projects.
        Start your journey to become a skilled web developer.
        `,
    },
    {
      title: 'UI/UX',
      image: uiuxImage,
      description: `
        Explore the principles of User Interface (UI) and User Experience (UX) design.
        Learn to create intuitive and user-friendly designs.
        Dive into prototyping, wireframing, and usability testing.
        Enhance your skills in visual and interactive design.
        `,
    },
    {
      title: 'POSTER DESIGN',
      image: posterImage,
      description: `
        Unlock your creativity with poster design and visual communication skills.
        Learn the art of composition and typography.
        Express your ideas through compelling and impactful posters.
        Turn your design passion into stunning visual stories.
        `,
    },
    {
      title: 'PYTHON PROGRAMMING',
      image: pythonImage,
      description: `
        Master the Python programming language for versatile application development.
        Explore data science, machine learning with Python.
        Dive into frameworks like Django and Flask for web applications.
        Build a strong foundation in Python programming.
        `,
    },
    {
      title: 'CYBER SECURITY',
      image: cyberImage,
      description: `
        Enhance your skills in cybersecurity and protect digital systems from threats.
        Learn ethical hacking and penetration testing best practices.
        Understand network security, cryptography, and risk management.
        Become a cybersecurity professional and safeguard the digital world.
        `,
    },
    {
      title: 'GAME DEVELOPMENT',
      image: gameImage,
      description: `
      Dive into the captivating realm of game development, where creativity knows no bounds. Master the art of crafting immersive gaming experiences, explore intricate game mechanics, and bring your ideas to life. Unleash your potential as you delve into captivating graphics, and dynamic gameplay. Whether you're creating engaging narratives or designing thrilling challenges, embrace the journey of game development and build a solid foundation for your creative endeavors
        `,
    },
  ];

  const Carousel = () => {
    return (
      <LoopCircleSlider
        size={400}
        autoplay={true}
        interval={5000}
      >
        {courses.map((course, index) => (
          <div key={index}>
            <img src={course.image} alt={course.title} />
            <p>{course.title}</p>
          </div>
        ))}
      </LoopCircleSlider>
    );
  };
  
  export default Carousel;