import React from 'react';
import './brand.css';
import { dronef, amuraf, inf, munf} from './import';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={dronef} alt="droneX" />
      </div>
      <div>
        <img src={amuraf} alt="amura" />
      </div>
      <div>
        <img src={inf} alt="innovateON" />
      </div>
      <div>
        <img src={munf} alt="MUN" />
      </div>
    </div>
  )
}

export default Brand;