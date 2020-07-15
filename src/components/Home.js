import React from "react";
import Search from "./Search";
import Location from "./Location";
import JobList from "./JobList";

const Home = () => {
  return (
    <div className="Home">
      <Search />
      <div className="content">
        <Location />
        <JobList />
      </div>
    </div>
  );
};

export default Home;
