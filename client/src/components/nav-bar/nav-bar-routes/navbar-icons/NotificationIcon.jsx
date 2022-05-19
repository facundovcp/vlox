import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function NotificationIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Notificaciones" className="navbar-icon">
          <BsFillBellFill />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
