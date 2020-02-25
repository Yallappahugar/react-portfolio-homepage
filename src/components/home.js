import React from 'react';



const Home = (props) => (

    <div className="main-content">
        <div className="container">
            <h2>{props.title}</h2>
            <div className="home-image"></div>
            <h3>About Me</h3>
            <div className ="description">
                        <h4>Hi, I'm YC Hugar</h4>
                        <h5>Full Stack Developer From India</h5>
                        <p>After completing 30 years of pysical service in Indian Army as a Junior Engineer (Elect and Mech), desirous to explore as a full stack deveoper. Everything is a hard nut unless you break it yourself or someone will breakit for you.</p>
            </div>    
            <div className="button-container"></div>
            <div className="button">
                 <p><button type="button" className="btn-bg">Download CV</button></p>
                 <p><button type="button" className="btn-light">Hire Me</button></p>
            </div>
            
            <h3>Contact</h3>
                                      
            <div className="footer-container"></div>
             <div className="footer-content">
            
                <div className="box-1">
                    <div class="icon">
                    <span class="fa fa-phone"></span>  
                    </div>
                    <h4>Phone</h4>
                    <p>+91 8982559141</p>
                </div>
                <div className="box-2">
                    <div class="icon">
                    <span class="fa fa-envelope"></span>  
                    </div>
                    <h4>Email</h4>
                    <p>yallappahugar11@gmail.com</p>
                </div>
                <div className="box-3">
                    <div class="icon">
                    <span class="fa fa-map-marker"></span>  
                    </div>
                    <h4>Location</h4>
                    <p>Neelbad Bhopal</p>
                </div>
             </div>

            <div class="social-links">
                <ul>
                    <li><a href=""><span class="fa fa-facebook"></span></a></li>
                    <li><a href=""><span class="fa fa-linkedin"></span></a></li>
                    <li><a href=""><span class="fa fa-skype"></span></a></li>
                    <li><a href=""><span class="fa fa-instagram"></span></a></li>
                </ul>
            </div>
 
        </div>
    </div>
    
);

export default Home;
            
            {/* <div className="thumbnail-title-container"></div>
            <div className="thumbnail-container">
                <div className="home-thumbnail-1"></div>
                <h3>About Me</h3>
                <div className="home-thumbnail-2"></div>
                <div className="home-thumbnail-3"></div>
            </div>  */}
            