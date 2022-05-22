import React from "react";
import "./Login.css";
import LoginLogo from '../../components/login/login-logo/LoginLogo';

export default function Login() {
  return (
    <div className="login-container">
      <div className="left-login-side">
        <div className="color-layer">
        </div>
        <div className="logo-container">
          <div className="logo-left-padding"></div>
          <LoginLogo></LoginLogo>
          <div className="logo-right-padding"></div>
        </div>
      </div>
    </div>
  )
}
