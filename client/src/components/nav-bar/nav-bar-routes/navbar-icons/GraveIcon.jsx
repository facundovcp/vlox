import React from "react";
import { GiHastyGrave } from "react-icons/gi";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function GraveIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Cementerio" className="navbar-icon">
          <GiHastyGrave />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
