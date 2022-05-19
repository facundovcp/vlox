import React from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function ShoutsIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Shouts" className="navbar-icon">
          <BsFillMegaphoneFill />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
