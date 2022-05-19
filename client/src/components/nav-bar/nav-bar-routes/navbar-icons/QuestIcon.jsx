import React from "react";
import { FaExclamation } from "react-icons/fa";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function QuestIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Misiones" className="navbar-icon">
          <FaExclamation />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
