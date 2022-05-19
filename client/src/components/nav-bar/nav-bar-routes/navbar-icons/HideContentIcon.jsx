import React from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function HideContentIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Ocultar Contenido" className="navbar-icon">
          <BsEyeSlashFill />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
