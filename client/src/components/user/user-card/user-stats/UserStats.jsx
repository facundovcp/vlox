import React from "react";
import "./UserStats.css";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";

export default function UserStats() {
  return (
    <div className="user-stats-container">
      <div className="upvotes-value">
        <span>0</span>
      </div>
      <div className="upvotes-icon">
        <ImArrowUp />
      </div>
      <div className="downvotes-icon">
        <ImArrowDown />
      </div>
      <div className="downvotes-value">
        <span>0</span>
      </div>
    </div>
  );
}
