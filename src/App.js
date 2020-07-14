import React from "react";
import "./scss/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Location from "./components/Location";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  return <>
    <Header />
    <Search />
    <Location />
    <JobList />
    <Footer />
  </>;
}

export default App;
