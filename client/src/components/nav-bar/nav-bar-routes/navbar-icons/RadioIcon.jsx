import React from "react";
import { MdRadio } from "react-icons/md";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function RadioIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Radio" className="navbar-icon">
          <MdRadio />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
