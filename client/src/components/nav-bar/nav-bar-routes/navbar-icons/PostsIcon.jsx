import React from "react";
import { AiFillFileText } from "react-icons/ai";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function PostsIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Posts" className="navbar-icon">
          <AiFillFileText />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
