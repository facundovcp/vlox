import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function RankIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Ranking" className="navbar-icon">
          <BsTrophyFill />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
