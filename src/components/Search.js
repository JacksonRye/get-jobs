import React from "react";

const Search = () => {
  return (
    <div className="Search">
      <div className="search-container">
        <form className="input-container">
          <input type="text" placeholder="Title, Company, Expertise" />
          <button>Search</button>
        </form>
      </div>

      <div className="fulltime">
        <input id="fulltime" type="checkbox" name="fulltime" value="fulltime" />
        <label htmlFor="fulltime">Full time</label>
      </div>
    </div>
  );
};

export default Search;
