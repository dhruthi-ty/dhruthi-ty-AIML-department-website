import React from 'react';
import './footer.css';
import rnsitlogo from '../../assets/rnsitlogo.png';

const Footer = () => {
  return (
    <div className='= "gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to know more about the Department</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={rnsitlogo} alt="logo" />
        <p>RNSIT</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Contact</p>
        <p>Social Media</p>
        <p>LinkdIn</p>
        <p>Overall</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Companies</h4>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>RNS Institute of Technology</p>
        <p>RNSIT, Bangalore</p>
        <p>India</p>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2025 RNSIT. All rights reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer;