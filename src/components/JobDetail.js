import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const JobDetail = ({ match }) => {
  const { params } = match;

  const id = +params.id;

  const { jobs, getJobs, loading } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
  }, []);

  console.log(id);

  const job = jobs.find((job) => job.id === id);

  console.log(job);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="JobDetail">
      <div className="top">
        <Link id="back" to="/">
          <i className="material-icons">arrow_back</i>
          <span id="back-to-search"> Back to Search</span>
        </Link>
        <h4 className="apply">HOW TO APPLY</h4>
        <p>
          Please email a copy of your resume to{" "}
          <span className="email">{job.email1}</span> & CC{" "}
          <span className="email">{job.email2}</span>
        </p>
      </div>

      <div className="content">
        <h2>{job.title}</h2>
        {job.fulltime ? <p className="fulltime">Full time</p> : null}
        <br />
        <div id="date">{job.posted.toLocaleDateString()}</div>

        <div className="head">
          <h1 className="image">A</h1>
          <div classname="info">
            <h3>{job.name}</h3>
            <span id="location">{job.location}</span>
          </div>
        </div>

        <p>{job.about}</p>
      </div>
    </div>
  );
};

export default JobDetail;
