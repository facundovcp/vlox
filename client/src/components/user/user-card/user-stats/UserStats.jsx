import React from "react";
import "./UserStats.css";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import ReactTooltip from "react-tooltip";


export default function UserStats() {
  return (
    <div className="user-stats-container">
      <div className="upvotes-value">
        <span>0</span>
      </div>
      <div className="upvotes-icon" data-tip="Votos positivos recibidos">
        <ImArrowUp />
      </div>
      <div className="downvotes-icon" data-tip="Votos negativos recibidos">
        <ImArrowDown />
      </div>
      <div className="downvotes-value">
        <span>0</span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
}
