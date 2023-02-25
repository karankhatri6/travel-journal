import React from 'react';
import Mountain from '../images/mountain.png';
import Mark from '../images/mark.png';

const Card = () => {
  return (
    <section className='card'>
        <img src={Mountain} className="card--img"/>
        <div className='card--stats'>
            <img src={Mark} />
            <span className='card--location'>JAPAN </span>
            <span className='card--google'>View on Google Maps</span>
            <p className='card--heading'>Mount Fuji</p>
            <p className='card--date'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className='card--para'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists</p>
        </div>
    </section>
  );
};

export default Card;