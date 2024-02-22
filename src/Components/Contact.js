import React from "react";

const Contact = () => {
  const handleButtonClick = () => {
    const emailAddress = "hodchemical@stjosephs.ac.in";
    const subject = "Query about the Internship";
    const body = "Hello, I have a question.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page-wrapper">
      {/* <h1 className="primary-heading" style={{background: 'linear-gradient(blue, black)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',}}>Have Any Questions In Mind?</h1> */}
      <h1 className="primary-heading" style={{background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',}}>Contact Us</h1>
      <div className="contact-form-container">
        <input className="mailtext" type="text" placeholder="Your mail_id" style={{marginRight:'2vh'}}/>
        <button className="secondary-button" onClick={handleButtonClick}>
          Mail
        </button>
      </div>
      <h2>Call us: +918754479033</h2>      
    </div>
  );
};

export default Contact;
