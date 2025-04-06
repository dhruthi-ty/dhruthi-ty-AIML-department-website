import React from 'react';
import { Feature } from '../../components';
import './features.css';

// Import images
import pich from '../../assets/pich.jpeg';
import pic1h from '../../assets/pic1h.jpeg';
import pic2h from '../../assets/pic2h.jpeg';
import pic3h from '../../assets/pic3h.png';

const featuresData = [
  { title: "Dr. Andhe Pallavi: Professor and HOD", img: pich },
  { title: "Dr. Mallik arjun : Assistant Professor", img: pic1h },
  { title: "Dr. Vrama satish: Associate. Professor", img: pic3h },
  { title: "Dr. Sruthi: Assistant. Professor", img: pic2h }
];



const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>

      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <div key={index} className="feature-card">
            <Feature title ={item.title} />
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Features;
