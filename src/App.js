import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Marquee from "./Components/Marquee"; 
import Schedule from "./Components/Schedule";
// import ImageSlider from "./Components/ImageSlider";
// import Features from "./Components/Features";
import General from "./Components/General";
// import Aboutclg from "./Components/Aboutclg";
// import Aboutclg2 from "./Components/Aboutclg2";
import Canvas from "./Components/Waves/Canvas";
import Canvas2 from "./Components/Waves/Canvas2";
import Preloader from "./Components/Preloader";
// import Carousel from "./Components/Work1";
import Poster from "./Components/Poster";
import './Button.css'
import Video from "./Components/Video";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-right"); 
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const targets = document.querySelectorAll(".poster-container"); 
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-left"); 
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const targets = document.querySelectorAll(".home-container");
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <Canvas2 />
      <div className="home-poster-container">
        <div className="home-container">
          <Home />
        </div>
        <div className="poster-container">
          <Poster />
        </div>
      </div>
      {/* <ImageSlider /> */}
      {/* <Work /> */}
      {/* <Carousel /> */}
      <h1  
        style={{
        background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        textAlign:'center',
        marginLeft:"5%",
        fontSize:"3rem",
        WebkitTextFillColor: 'transparent',}}>
        About the Department
      </h1>
      <About />
      <Video />
      <Schedule />
      <Marquee />
      
      {/* <Aboutclg />
      <Aboutclg2 /> */}
      <General />
      {/* <Features />
      <ImageSlider /> */}
      {/* <Testimonial /> */}
      <Contact />
      <div className="home-poster-container">
        <div className="home-container">
          {/* <Home /> */}
          <a className="regf" href="https://forms.gle/GAhmK6GXTJVnuFUFA" target="_blank" style={{marginLeft: '10vw'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </a>
        </div>
        <div className="poster-container">
          <Poster />
        </div>
      </div>
      <Canvas />
      <Footer /> 
      <Preloader />
    </div>
  );
}

export default App;
