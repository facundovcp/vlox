import React from 'react'
import "./LoginForm.css";
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <div className="login-form-container">
            <div className="auth-form">
                <div className="auth-inputs-container">
                    <div className="username-container">
                        <label class="field field_v2">
                            <input class="field__input" placeholder="" />
                            <span class="field__label-wrap">
                                <span class="field__label">Usuario</span>
                            </span>
                        </label>
                    </div>
                    <div className="password-container">
                        <label class="field field_v2">
                            <input class="field__input" placeholder="" type='password' />
                            <span class="field__label-wrap">
                                <span class="field__label">Contraseña</span>
                            </span>
                        </label>
                    </div>
                </div>
                <button className="btn-login">Ingresar</button>
            </div>
            <div className="register-form">
                <span className="question-label">¿No tenés cuenta?</span>
                <Link className="btn-signup" to="/registro">Registro</Link>
            </div>
        </div>
    )
}
