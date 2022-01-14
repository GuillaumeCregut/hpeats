import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import "./Footer.css";




function Footer() {
    let iconeStyle = {fontSize: "2em"}
    return (
        <div className="Footer">
            <h2 className="title-footer">Les Concepteurs</h2>
            <div className="container_linkedin">
                <div className="container_icone">    
                <p className="container_name">Nicolas Belot</p>
                <a  href="https://www.linkedin.com/in/nicolas-belot-749a52226/" target="_blank"> <FaLinkedin style={iconeStyle} />  </a>
                </div>
                <div className="container_icone">
                <p className="container_name">Maud Aletti</p>
                <a  href="https://www.linkedin.com/in/maud-aletti-1622572" target="_blank"> <FaLinkedin style={iconeStyle} /> </a>
                </div>
                <div className="container_icone">
                <p className="container_name">Jérémie Piazza</p>
                <a  href="https://www.linkedin.com/in/jeremie-piazza-a1754012a/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
                <div className="container_icone">
                <p className="container_name">Iysha Barton</p>
                <a  href="https://www.instagram.com/iysha.summers/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
                <div className="container_icone">
                <p className="container_name">Guillaume Creput</p>
                <a  href="https://www.linkedin.com/in/guillaumecregut/" target="_blank"> <FaLinkedin style={iconeStyle}/> </a>
                </div>
            </div>

            <div className="container_social">
                <h2 className="title_social">Nos réseaux</h2>
                <div className="container_reseaux">
                    <div className="reseaux">    
                    <a  href="" target="_blank"> <FaInstagram style={iconeStyle} />  </a>
                    </div>
                    <div className="reseau">
                    <a  href="" target="_blank"> <FaFacebook style={iconeStyle} />  </a>
                    </div>
                    <div className="reseau">
                    <a  href="" target="_blank"> <FaWhatsapp style={iconeStyle} />  </a>
                    </div>
                </div>
            </div>
            

        </div>
        
    )
}

export default Footer
