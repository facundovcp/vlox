import React from "react";
import { FaHome } from "react-icons/fa";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function HomeIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Home" className="navbar-icon">
          <FaHome />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
