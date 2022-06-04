import React from 'react'
import "./LoginLogo.css";
import LoginForm from '../login-form/LoginForm';


export default function LoginLogo() {
    return (
        <div className="signs-containers">
            <div className="logo">
                <div className="open">
                    <span className="open-sign">open</span>
                </div>
                <span className="webdev">Vlox</span>
                <span className="socod">Comunidad de Contenidos</span>
            </div>
            <div className="login-auth-container">
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}
