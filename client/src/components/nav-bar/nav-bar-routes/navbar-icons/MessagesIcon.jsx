import React from "react";
import { MdMessage } from "react-icons/md";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function MessagesIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Mensajes" className="navbar-icon">
          <MdMessage />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
