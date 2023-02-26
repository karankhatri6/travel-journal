import React from 'react';
import Mark from '../images/mark.png';

const Card = (props) => {
  return (
    <section className='card'>
        <img src={props.item.coverImg} className="card--img"/>
        <div className='card--stats'>
            <img src={Mark} />
            <span className='card--location'>{props.item.location} </span>
            <span className='card--google'>View on Google Maps</span>
            <p className='card--heading'>{props.item.placeName}</p>
            <p className='card--date'>{props.item.date}</p>
            <p className='card--para'>{props.item.description}</p>
        </div>
    </section>
  );
};

export default Card;