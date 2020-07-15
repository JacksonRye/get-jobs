import React, { useContext, useEffect } from "react";
import Job from "./Job";
import { GlobalContext } from "../context/GlobalState";

const JobList = () => {
  const { jobs, getJobs } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="JobList">
      {jobs.map((job, id) => (
        <Job key={id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
