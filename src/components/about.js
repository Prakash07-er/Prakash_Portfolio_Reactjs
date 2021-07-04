import React from 'react'
import '../styles/about.css'


export default function About() {
    return (
        <>  
          <section id="about">
            <div class="about container " data-aos="fade-right">
            <div class="col-left">
                <div class="about-img">
                <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625290360/9737T0A001_pjebq2.jpg" alt="img" />
                </div>

            </div>
            <div class="col-right">
              <h1 class="section-title">About <span>me</span></h1>
                 <h2 className= "first_h2_heading"> <i class="fas fa-angle-right left-arrow-heading" ></i> A Enthusiastic Full Stack Developer</h2>
                <h2><i class="fas fa-angle-right left-arrow-heading"></i> Born To Explore </h2>
                <h2 className="last_h2_heading "><i class="fas fa-angle-right left-arrow-heading"></i> Tries to learn something new every day </h2>
                
                
                <a href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf" download="newfilename" target="_blank" rel="noopener noreferrer" class="cta"><i class="fas fa-download download_icon "></i>  Download Resume</a>
                <a href="#contact" class="cta"><i class="fab fa-gripfire hire_me_icon"></i> Hire Me</a>
            </div>
            </div>
        </section>
        </>
    )
}
