import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="Job">


        <div className="image-container">
          <h1>A</h1>
        </div>
        <div className="info-container">
          <h4>{job.name}</h4>
          <span id="title">{job.title}</span>
          <br></br>


          <div className="bottom">
            <div>
              {job.fulltime ? <p className="fulltime">Full time</p> : null}
            </div>

            <div className="location-time">
              <div>{job.location}</div>
              <div id="time">{job.posted.toLocaleString().split(",")[0]}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
