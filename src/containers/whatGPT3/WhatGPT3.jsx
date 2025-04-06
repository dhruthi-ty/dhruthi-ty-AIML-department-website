import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';


const WhatGPT3 = () =>  (
    <div className='gpt3__wtgpt3 section__margin' id="wgpt3">
      <div className="gpt3__wtgpt3-feature">
        <Feature title = "What is Artificial Intelligence?" text="Machines now awaken to thought, where once silence dwelled. In quiet precision they observe, learn, and reason, shaping moments beyond mere code. Intelligence no longer bound to human form, but flowing through circuits unseen. It dwells in patterns, speaks in data, and acts in ways once left to imagination. From humble tasks to grand discovery, Artificial Intelligence weaves itself into the fabric of life — not to replace, but to elevate. A silent partner in progress, learning always, evolving endlessly."/>
      </div>
      <div className="gpt3__wtgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
    </div>
    <div className="gpt3__wtgpt3-container">
      <Feature  title = "Automation" text =" AI automation isn’t about replacing humans — it's about empowering them. It handles repetitive tasks so that humans can focus on innovation, strategy, and creativity."/>
      <Feature title = "Knowledge-Based" text = "Turning data into decisions — AI systems that store knowledge, analyze information, and deliver smart solutions."/>
      <Feature title = " Education" text = "Empowering learning beyond boundaries — AI personalizes education, making it more adaptive, inclusive, and accessible."/>
    </div>
  </div>


  );


export default WhatGPT3;