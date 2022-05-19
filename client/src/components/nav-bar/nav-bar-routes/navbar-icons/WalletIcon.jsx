import React from "react";
import { IoWallet } from "react-icons/io5";
import "../NavBarRoutes.css";
import ReactTooltip from "react-tooltip";

export default function WalletIcon() {
  return (
    <>
      <div className="icon-circle">
        <span data-tip="Monedero" className="navbar-icon">
          <IoWallet />
        </span>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
}
