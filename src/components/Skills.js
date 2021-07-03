import React from 'react'
import '../styles/skills.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function Skills() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase:"linear"
    }
    return (
        
        <div>  
            <h1 className='section-skill-title'>My Skills</h1>
            <section id="skills">
                <div className='container'>
                </div>
                        <div class="progressBar"  data-aos="fade-down-right">
                            <h4>HTML5</h4>
                            <div class="progressBarContainer">
                                <div class="progressBarValue value-90"></div>
                            </div>
                        </div>
                        <div class="progressBar"  data-aos="fade-down-right">
                            <h4>CSS3</h4>
                            <div class="progressBarContainer">
                                <div class="progressBarValue value-80"></div>
                            </div>
                        </div>
                        <div class="progressBar"  data-aos="fade-down-right">
                            <h4>JavaScript</h4>
                            <div class="progressBarContainer">
                                <div class="progressBarValue value-80"></div>
                            </div>
                        </div>
                        <div class="progressBar"  data-aos="fade-down-right">
                            <h4>MERN Stack</h4>
                            <div class="progressBarContainer">
                                <div class="progressBarValue value-70"></div>
                            </div>
                        </div>
            <Slider {...settings} className="slider" >
                <div className="card-wrapper"  data-aos="fade-in">
                        <div className="card-image"  data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/node_rfyvfz.png' alt='NodeJs' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/5847f5bdcef1014c0b5e489c_mwgmv3.png' alt='HTML 5' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/mongodb-logo_tpygyf.png' alt='Mongo DB' />
                    </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/JS_oehidy.png' alt='JS' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/react_dpmoli.png' alt='React Js' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/css_zszamh.png' alt='CSS 3' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/datast_w3ilwm.png' alt='Data Stuctures' />
                        </div>
                </div>
                <div className="card-wrapper" data-aos="fade-in">
                        <div className="card-image" data-aos="flip-up">
                            <img src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/bootstrap_aol451.png' alt='Bootstrap' />
                        </div>
                </div>
            </Slider>

            </section>
            
        </div>
    )
}
