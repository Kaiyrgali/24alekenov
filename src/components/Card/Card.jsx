import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({
  label, draggable, date, rocket, name, dragStartHandler,
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

Card.propTypes = {
  label: PropTypes.object.isRequired,
  draggable: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  rocket: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
};

export default Card;
