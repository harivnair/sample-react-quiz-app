import React from "react";
// import Sidebar from "./components/sidebar.component";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrimaryContent from "./components/primary-content.component";
import "./css/sidebar.css";
import "./css/header.css";
import "./css/primary-content.css";
import './App.css';
import Login from "./components/login/Login";
function App() {
  const flexDisplay = {
    display: 'flex',
  };
  return (
    <div >
      {/* <Header className="header" /> */}
      <div style={flexDisplay}>
        <Router>
          <Redirect exact from="/" to="login" />
          <Route path="/getQs" component={PrimaryContent} />

          <Route path="/login" component={Login} />
          {/* <Sidebar className="sidebar" /> */}

          {/* <PrimaryContent className="primary-content" /> */}
        </Router>

      </div>

    </div>
  );
}

export default App;
