import React from 'react'
import '../styles/header.css'
import Typed from 'react-typed'


export default function Header() {
    return (
        <>
        <div className="header_wrapper" id="myprofile" >
            <div className="main_content" data-aos='fade-right'  >
                <h1> 𝐢𝐟(𝐛𝐫𝐚𝐢𝐧 != 𝐞𝐦𝐩𝐭𝐲) then <span className="keepCoding"> 𝗞𝗲𝗲𝗽𝗖𝗼𝗱𝗶𝗻𝗴 </span>  <br/> else 𝗢𝗿𝗱𝗲𝗿𝗖𝗼𝗳𝗳𝗲𝗲 <br />  </h1>
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
