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
                        <a href="#myprofile" class="nav-link"> 𝓜𝓨 𝓟𝓡𝓞𝓕𝓘𝓛𝓔 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link" >𝓐𝓑𝓞𝓤𝓣 𝓜𝓔</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link" >𝓡𝓔𝓢𝓤𝓜𝓔</a>
                    </li>
                    <li class="nav-item">
                        <a href= "#project" class="nav-link" >𝓟𝓡𝓞𝓙𝓔𝓒𝓣𝓢</a>
                    </li>
                   <li class="nav-item">
                        <a href="#contact" class="nav-link" >𝓒𝓞𝓝𝓣𝓐𝓒𝓣 𝓜𝓔</a>
                    </li>
                    </ul>
                
                </div>
            </div>
            </nav>
        </div>
    )
}
