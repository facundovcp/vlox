import React from "react";
import "./UserHealth.css";
import ReactTooltip from "react-tooltip";


export default function UserHealth() {
  const healthValue = [true, true, true, true, true];
  return (
    <>
      <span className="user-hearts" data-tip="Vidas: 5/5">
        {healthValue.map((heart) => {
          return <div className="hearth-icon"></div>;
        })}
      </span>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
