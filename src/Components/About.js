import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const About = () => {
  const youtubeChannelURL = "https://youtu.be/oCgd1q5yknE?si=myDo9zgC4ghKMbBE";

  return (
    <div className="about-section-container" style={{ marginTop: '8vh' }}>
      {/*<div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://youtu.be/oCgd1q5yknE?si=myDo9zgC4ghKMbBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>*/}
      <NewSlider />
      <div className="right-dept">
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        
        <p className="primary-text">- The department was established in 1994.</p>
        <p className="primary-text">- Course offered by the department is B.Tech – Chemical Engineering </p>
        <p className="primary-text">- which is affiliated to Anna University Chennai. It is a full time course with 8 semesters.</p>
        <p className="primary-text">- Current annual intake is 60 students. Mode of admission is Institutional and Central (SWS).</p>
        <p className="primary-text">- Motivating students to participate in various national events</p>
        <p className="primary-text">- Several value-added courses are conducted beyond curriculum</p>
        <p className="primary-text">- The Department has been accredited by National Board of Accredition and its validity till 2032.</p>
        <div className="about-buttons-container">
          <a href="https://stjosephs.ac.in/departmentsite/chemical%20website/Website/index.html"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;