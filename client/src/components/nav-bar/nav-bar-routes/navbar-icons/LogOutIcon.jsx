import React from "react";
import { IoLogOut } from "react-icons/io5";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function LogOutIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Cerrar Sesión" className="navbar-icon">
          <IoLogOut />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
