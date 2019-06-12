import React from "react";
import Header from "./components/header.component";
import Sidebar from "./components/sidebar.component";
import PrimaryContent from "./components/primary-content.component";
import "./css/sidebar.css";
import "./css/header.css";
import "./css/primary-content.css";
import './App.css'
function App() {
    const flexDisplay={
      display: 'flex',
  }
  return (
    <div >
      <Header className="header" />
      <div style={flexDisplay}>
      <Sidebar className="sidebar" />
      <PrimaryContent className="primary-content"></PrimaryContent>
     
      </div>
     
    </div>
  );
}

export default App;
