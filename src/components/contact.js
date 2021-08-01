import React from 'react'
import "../styles/contact.css"
import emailjs from "emailjs-com"

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('GMAIL', 'template_0gty2yr', e.target, 'user_3SQGDv5jX5tRGXUoi3mMD')
          .then((result) => {
              alert("I've received your message, I'll reply you ASAP");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    return (<>
        <div class="container contact-form" id='contact'>
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post" onSubmit={sendEmail}>
                <h3>Drop Me a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text"  name="name" class="form-control input_area_contact" placeholder="Your Name *" required/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control input_area_contact" placeholder="Valid Email *" required />
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" class="form-control input_area_contact" placeholder="enter subject *"  required />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="message" class="form-control input_area_contact" placeholder="Your Message *" style={{width: "100%", height: "150px"}} required ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row cantact_inks">
                     <a href="https://wa.link/3a10z6" alt =" " target="_blank" className="social_links_me"> <i class="fab fa-whatsapp"></i> </a> 
                     <a  href="https://github.com/Prakash07-er/" alt =" " target="_blank"  className="social_links_me">  <i class="fab fa-github"></i> </a>
                      <a  href="https://linkedin.com/in/prakash-umaganthan-full-stack-developer" alt =" " target="_blank"  className="social_links_me"> <i class="fab fa-linkedin"></i> </a> 

                </div>
            </form>
        </div>        
</>    )
}

