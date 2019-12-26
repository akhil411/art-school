import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand school-logo" href="/"><img src="../assets/images/school-logo.png"></img></a>
            <a className="navbar-brand" href="/">Hills School</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Annual report</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Registration</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Policy Manual</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Departments
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Sports</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Health</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Student Services</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contact
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Board Members</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Employment</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Contact</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;