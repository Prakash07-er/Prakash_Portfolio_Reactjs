import React from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}} />
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                    <li class="nav-item active">
                        <a href="#myprofile" class="nav-link"> My Profile <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link"> About Me</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link" > Journey   </a>
                    </li>
                    <li class="nav-item">
                        <a href= "#project" class="nav-link" > Projects </a>
                    </li>
                   <li class="nav-item">
                        <a href="#contact" class="nav-link" > Contact Me </a>
                    </li>
                    </ul>
                
                </div>
            </div>
            </nav>
        </div>
    )
}
