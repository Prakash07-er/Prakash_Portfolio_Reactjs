import React from 'react'
import '../styles/header.css'
import Typed from 'react-typed'


export default function Header() {
    return (
        <>
        <div className="header_wrapper" id="myprofile" >
            <div className="main_content" data-aos='fade-right'  >
                <h1> π’π(ππ«ππ’π§ != ππ¦π©π­π²) then <span className="keepCoding"> ππ²π²π½ππΌπ±πΆπ»π΄ </span>  <br/> else π’πΏπ±π²πΏππΌπ³π³π²π² <br />  </h1>
                <h2 className="my_name">I'm <span className="specific_name">Prakash </span>  who is </h2>
                <Typed 
                    className="Typed_string"
                    strings={["Web Application Developer", "MERN Stack Developer", "Traveller", "Free_Lancer"]}   
                    typeSpeed={40}
                    backSpeed ={60}
                    loop   
                />
                <a href="#contact" className="Contact_me btn btn-primary button-small"> Say Hi </a>
            </div>
        </div>
   </> )
}
