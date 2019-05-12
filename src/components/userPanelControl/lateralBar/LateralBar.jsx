import React from 'react'

export default function LateralBar(props) {
    return (

        <div className="row d-flex justify-content-center mb-5">
            <div>
                <nav className="nav flex-column pink lighten-3 py-4 mb-r font-weight-bold z-depth-1">
                    <p className="nav-link white-text" onClick={props.activateMain}>Main</p>
                    <p className="nav-link white-text" onClick={props.activateChangePassword}>Change Password</p>
                    <p className="nav-link white-text" >Personal Information</p>
                    <p className="nav-link white-text" >Others</p>
                </nav>
            </div>
        </div>
    )
}
