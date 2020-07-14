import React from "react";

const Job = ({ job }) => {
  return (
    <div className="Job">
      <div className="image-container">
        <h1>A</h1>
      </div>
      <div className="info-container">
        <h4>{job.name}</h4>
        <span id="title">{job.title}</span>
        <br></br>
        {job.fulltime ? <p id="fulltime">Full time</p> : null}

        <div className="location-time">
          <span>{job.location}</span>
          <span id="time">{job.posted.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Job;
