import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import "./Footer.css";




function Footer() {
    let iconeStyle = {fontSize: "2em", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }
    return (
        <div className="Footer">
            <h2 className="title-footer">Les Concepteurs</h2>
            <div className="container_linkedin">
                <div className="container_icon">    
                <p className="container_name">Nicolas Belot</p>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/nicolas-belot-749a52226/" target="_blank"> <FaLinkedin style={iconeStyle} />  </a>
                </div>
                <div className="container_icon">
                <p className="container_name">Maud Aletti</p>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/maud-aletti-1622572" target="_blank"> <FaLinkedin style={iconeStyle} /> </a>
                </div>
                <div className="container_icon">
                <p className="container_name">Jérémie Piazza</p>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/jeremie-piazza-a1754012a/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
                <div className="container_icon">
                <p className="container_name">Iysha Barton</p>
                <a className="linkedinIcon" href="https://www.instagram.com/iysha.summers/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
                <div className="container_icon">
                <p className="container_name">Guillaume Creput</p>
                <a className="linkedinIcon" href="https://www.linkedin.com/in/guillaumecregut/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
            </div>

            <div className="container_social">
                <h2 className="title_social">Nos réseaux</h2>
                <div className="container_reseaux">
                    <div className="reseaux">    
                    <a className="instaIcon" href="" target="_blank"> <FaInstagram style={iconeStyle} />  </a>
                    </div>
                    <div className="reseau">
                    <a className="facebookIcon" href="" target="_blank"> <FaFacebook style={iconeStyle} />  </a>
                    </div>
                    <div className="reseau">
                    <a className="whatIcon" href="" target="_blank"> <FaWhatsapp style={iconeStyle} />  </a>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    )
}

export default Footer
