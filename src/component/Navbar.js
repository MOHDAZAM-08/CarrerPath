// Navbar.js

import React from 'react';
// import './Navbar.css';

export default function Navbar() {



    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Carrer   P a t h</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                            
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                            
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                            
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">Road Maps</a> 
                            
                        </li> <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
                            
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
