import "./RegisterPage.css";
import Loading from '../../shared/components/loading/Loading';
import React, { useState, useEffect } from 'react'
import SignUpInfo from '../../components/signup/signup-info/SignUpInfo';

export default function RegisterPage() {


    useEffect(() => {
        hideLoading();
    })

    const [loading, setLoading] = useState(true);

    const hideLoading = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }

    return (
        <>
            {
                loading ?
                    <div className="loading-space">
                        <Loading></Loading>
                    </div>
                    : <div className="register-container">
                        <div className="middle-register-container">
                            <SignUpInfo></SignUpInfo>
                        </div>
                    </div>
            }
        </>
    )
}
