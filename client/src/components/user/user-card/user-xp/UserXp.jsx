import React from 'react'
import "./UserXp.css";
import ReactTooltip from "react-tooltip";

export default function UserXp() {
    return (
        <>
            <div className="xp-bar" data-tip="10%">
                <div className="xp-block"></div>
                <div className="xp-fill"></div>
            </div>
            <ReactTooltip place="top" type="dark" effect="solid" />

        </>
    )
}
