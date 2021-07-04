import React from 'react'
import '../styles/project.css'

export default function Projects() {
    return (
        <>
          <section id="project">
          <h1 class="section-heading-title">My Work </h1>
          <div class="project container " data-aos="fade-right">
            <div class="col-right">
                    <h2 > Ecommerce MERN Project </h2>
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> JavaScript </li>  
                       <li className='li_tech_list'><i class="fas fa-angle-right left-arrow-heading" ></i> EmailJs  </li>
                   </ul>                   
                    <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> Bootstrap </li>  
                       <li className='li_tech_list last_list_margin_bottom'><i class="fas fa-angle-right left-arrow-heading" ></i> NodeJs </li>
                   </ul>                   
                    <a href="https://e-torque.herokuapp.com/" class="cta" rel="noopener noreferrer" target="_blank"><i class="fas fa-code-branch liveDemo_Icon"></i> Live Demo</a>
                    <a href="https://github.com/Prakash07-er" class="cta"><i class="fab fa-github github_Icon"></i> GitHub</a>
                </div>
              <div class="col-left">
                <div class="project-img"  data-aos="fade-in">
                <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625306009/ecommerce_a4lfvk.png" alt="img" />
                </div>

            </div>
           
            </div>
          <div class="project container " data-aos="fade-right">
            <div class="col-right">
                <h2>Bloggers_Den MERN Project</h2>
                    <ul className="tech_list">
                        <li className='li_tech_list list_top'><i class="fas fa-angle-right left-arrow-heading" ></i> JAvaScript</li>
                        <li className='li_tech_list '><i class="fas fa-angle-right left-arrow-heading" ></i> ReactjS</li>
                    </ul>   
                    <ul className="tech_list">
                        <li className='li_tech_list list_top'><i class="fas fa-angle-right left-arrow-heading" ></i> JAvaScript</li>
                        <li className='li_tech_list last_list_margin_bottom'><i class="fas fa-angle-right left-arrow-heading" ></i> ReactjS</li>
                    </ul>   
                        
                    <a href="#resume" class="cta"><i class="fas fa-code-branch liveDemo_Icon"></i> Live Demo</a>
                    <a href="#resume" class="cta"> <i class="fab fa-github github_Icon"></i> GitHub</a>
                </div>
              <div class="col-left">
                <div class="project-img"  data-aos="fade-in">
                <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625306108/whatisblog_oiqzpz.png" alt="img" />
                </div>

            </div>
           
            </div>
          <div class="project container " data-aos="fade-right">
            <div class="col-right">
                    <h2 > Tabel Reservation Reactjs </h2>
                   <ul className="tech_list">
                       <li className='li_tech_list list_top'> <i class="fas fa-angle-right left-arrow-heading" ></i> JavaScript </li>
                       <li className='li_tech_list '><i class="fas fa-angle-right left-arrow-heading" ></i> ReactJs </li>
                   </ul>
                   <ul className="tech_list">
                       <li className='li_tech_list list_top'><i class="fas fa-angle-right left-arrow-heading" ></i> JavaScript </li>
                       <li className='li_tech_list last_list_margin_bottom'><i class="fas fa-angle-right left-arrow-heading" ></i> ReactJs </li>
                   </ul>
                    
                    <a href="https://e-torque.herokuapp.com/" class="cta" ><i class="fas fa-code-branch liveDemo_Icon"></i> Live Demo</a>
                    <a href="https://github.com/Prakash07-er/eTorque_eCommerce_MERN_project" rel="noopener noreferrer" class="cta"><i class="fab fa-github github_Icon"></i> GitHub</a>
                </div>
              <div class="col-left">
                <div class="project-img"  data-aos="fade-in">
                <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625306305/res_xzzcps.jpg" alt="img" />
                </div>
            </div>
           
            </div>
        
        </section>
        </>
    )
}