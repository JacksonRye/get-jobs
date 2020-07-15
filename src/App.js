import React from "react";
import "./scss/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/jobs/:id", name: "JobDetail", Component: JobDetail },
];

function App() {
  return (
    <GlobalProvider>
      <Header />

      <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Router>

      <Footer />
    </GlobalProvider>
  );
}

export default App;
