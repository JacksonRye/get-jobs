import React from "react";
import Job from './Job'

const JobList = () => {
  const jobs = [
    {
      name: "Fanta",
      title: "Senior Engineer",
      fulltime: false,
      image: "./images/fanta.jpg",
      location: "Ny",
      posted: new Date(),
    },
    {
      name: "Fanta",
      title: "Senior Engineer",
      fulltime: true,
      image: "./images/fanta.jpg",
      location: "Ny",
      posted: new Date(),
    },
    {
      name: "Fanta",
      title: "Senior Engineer",
      fulltime: true,
      image: "",
      location: "Ny",
      posted: new Date(),
    },
    {
      name: "Fanta",
      title: "Senior Engineer",
      fulltime: true,
      image: "./images/fanta.jpg",
      location: "Ny",
      posted: new Date(),
    },
  ];

  return <div className="JobList">
      {jobs.map((job, id) => (
          <Job key={id} job={job} />
      ))}
  </div>;
};

export default JobList;
