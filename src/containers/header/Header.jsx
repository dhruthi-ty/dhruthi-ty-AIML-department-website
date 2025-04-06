import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { RiHome2Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="gpt3__header section__padding id">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Welcome to the Future of Intelligence — Explore the AI & ML Department at RNSIT.</h1>
        <p>Explore the AIML Department at RNSIT — a hub of innovation, guided by experienced faculty and powered by passionate student clubs. From academic insights to placement highlights, find everything you need to know about our department right here.</p>
        <div className="gpt3__header-content__input">
          <input type = "email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src = {people} alt = "people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className="gpt3__header-image">
          <img src = {ai} alt = "ai" />
        </div>
      </div>
    
  )
}
export default Header;