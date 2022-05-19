import React from "react";
import { FaUser } from "react-icons/fa";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function ProfileIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Perfil" className="navbar-icon">
          <FaUser />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
