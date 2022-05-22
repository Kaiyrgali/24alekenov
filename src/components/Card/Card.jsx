import React from "react";
import './Card.scss';

const Card = ({date, rocket, name}) =>{
  console.log('in Card >', date, rocket, name)
  return (
    <div className="Card">
      <h3 className="Card-Name">
        {name}
      </h3>
      <h4 className="Card-Rocket">
        {rocket}
      </h4>
      <h5 className="Card-Date">
        {date}
      </h5>
    </div>
  )
}

export default Card;
