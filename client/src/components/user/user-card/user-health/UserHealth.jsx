import React from "react";
import "./UserHealth.css";

export default function UserHealth() {
  const healthValue = [true, true, true, true, true];
  return (
    <span className="user-hearts">
      {healthValue.map((heart) => {
        return <div className="hearth-icon"></div>;
      })}
    </span>
  );
}
