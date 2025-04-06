import React from 'react';
import './possiblities.css';
import possiblityImage from '../../assets/possibility.png';
const Possiblities = () => {
  return (
    <div className="gpt3__possiblities section__padding" id= "possiblities">
      <div className="gpt3__possiblities-images">
        <img src = {possiblityImage} alt="possibility" />
      </div>
      <div className="gpt3__possiblities-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Artificial Intelligence (AI) is a branch of computer science that focuses on creating machines and systems that can perform tasks that normally require human intelligence. These tasks include learning, problem-solving, decision-making, speech recognition, image processing, and more. AI is used in various fields like healthcare, education, transportation, finance, and entertainment. Technologies like virtual assistants (Siri, Alexa), self-driving cars, recommendation systems (YouTube, Netflix), and smart robots are all examples of AI in action.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
    </div>
  )
}
export default Possiblities;