import React from "react";
import { BsFillFileRichtextFill } from "react-icons/bs";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function MyContentIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Mi Contenido" className="navbar-icon">
          <BsFillFileRichtextFill />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
