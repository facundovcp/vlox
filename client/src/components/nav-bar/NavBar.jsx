import React from "react";
import "./NavBar.css";
import NavBarRoutes from "./nav-bar-routes/NavBarRoutes";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="left-padding"></div>
      {/* <div className="logo-container">
        <p className="title-of-the-page">VloX</p>
      </div> */}
      <div className="routes-container">
        <NavBarRoutes></NavBarRoutes>
      </div>
      <div className="right-padding"></div>
    </div>
  );
}
