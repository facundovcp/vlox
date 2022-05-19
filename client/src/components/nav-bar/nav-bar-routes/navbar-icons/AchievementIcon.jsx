import React from "react";
import { GiAchievement } from "react-icons/gi";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function AchievementIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Logros" className="navbar-icon">
          <GiAchievement />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
