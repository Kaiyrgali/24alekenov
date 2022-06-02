import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({
  label, draggable, date, rocket, name, dragStartHandler = null,
}) {
  return (
    <Link
      to={`/details/${label.id}`}
      draggable={false}
    >
      <div
        className="Card"
        id={name}
        draggable={draggable}
        onDragStart={(e) => dragStartHandler(e, label)}
      >
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
    </Link>
  );
}

export default Card;
