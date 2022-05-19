import React from "react";
import { FaSearch } from "react-icons/fa";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function SearchIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Buscar" className="navbar-icon">
          <FaSearch />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
