import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p><strong>Day {index + 1}:</strong> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
      
        "Proximate analysis of fats and oils, Group discussions on analytical approaches",
        "Group discussions on analytical approaches, Students will analyse a provided soap sample",
        "Troubleshooting common issues in soap making, Comprehensive soap analysis report and presentation",
        "Key quality parameters: pH, moisture content, hardness, etc."
      ],

      "1:1":[
        "Overview of MATLAB and C++",
        "Setting up development environments for MATLAB and C++",
        "MATLAB syntax and scripting",
        "Hands-on exercises in solving mathematical problems",
        "Case studies and practical examples"
      ],
      "1:2":[
        "Design of unit operations ",
        "Hands-on exercises solving aspen", 
        "STUDENTS WILL CHOOSE  PROJECT ",
        "case studies and practical examples",
      ],
      "1:3":[
        "ANALYSIS OF WATER SAMPLE",
        "TESTING OF PROEPRTIES",
        "MAPPING THE SAMPLE",
        "MEMBRANE SITE VISIT",
        "REAL TIME OPERATION OF WATER TREATMENT PLANT",
      ],
      "1:4":[
        "•	STUDENTS PROJECT EXPO",
        "VALIDETAICATION AND CERTIFICATE"
      ],

  });
  
  const x = ['FLAVOR ALCHEMY', 'MATLAB VS C++ SHOW DOWN', 'ASPEN SIM MASTER', 'ASPEN SIM MASTER', 'STUDENTS PROJECT EXPO']

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1, 2, 3, 4, 5].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            {x[week - 1]} <br />(Week {week})
          </th>
        ))}
      </tr>
    </thead>
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              {/*<td style={{ border: "1px solid black", padding: "8px" }}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</td>*/}
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Day1", "Day2", "Day3", "Day4", "Day5"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday","FLAVOR ALCHEMY", "MATLAB VS C++ SHOW DOWN", "ASPEN SIM MASTER", "AQUA QUANDARIES", "VALIDETAICATION AND CERTIFICATE"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s", }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;