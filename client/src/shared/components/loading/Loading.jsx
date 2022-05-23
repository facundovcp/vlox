import React from 'react'
import "./Loading.css";

export default function Loading() {

    //TO DO: make this component receive props for loading tips
    return (
        <div className="loading-container">
            <div className="loading-message">
                <span>Cargando...</span>
            </div>
            <div className="loading-holder">
                <div class="holder">
                    <div class="box"></div>
                </div>
                <div class="holder">
                    <div class="box"></div>
                </div>
                <div class="holder">
                    <div class="box"></div>
                </div>
            </div>
            <div className="loading-tip">
                <span>El registro puede llevar algunos minutos, pero proporciona información necesaria. </span>
            </div>
        </div>
    )
}
