import React from "react";
import "./UserCard.css";
import UserHealth from "./user-health/UserHealth";
import UserStats from "./user-stats/UserStats";
import UserXp from "./user-xp/UserXp";

export default function UserCard() {
  return (
    <div className="user-card-container">
      <div className="user-card-top">
        <div className="profile-picture-circle"></div>
      </div>
      <div className="user-card-bottom">
        <div className="user-info-row">
          <span className="user-name-label">UserName001</span>
          <span className="user-level-label">Niv. 1</span>
        </div>
        <div className="user-stats">
          <UserStats></UserStats>
        </div>
        <div className="user-health">
          <UserHealth></UserHealth>
        </div>
        <div className="user-experience">
          <UserXp></UserXp>
        </div>
      </div>
    </div>
  );
}
