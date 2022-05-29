import React from "react";
import { Link } from "react-router-dom";
import Details from "../../routers/Details";
import './Card.scss';

const Card = ({ label, draggable, date, rocket, name,
  dragStartHandler, 
  // dragEndHandler,
  //  dragOverHandler, 
  //  dropHandler 
  }) =>{
  return (
    <Link to={`/details/${label.id}`}>
      <div 
        className="Card"
        id={name}
        draggable={draggable}
        onDragStart={(e) => dragStartHandler(e, label)}
        // onDragLeave={(e) => dragEndHandler(e)}
        // onDragEnd={(e) => dragEndHandler(e)}
        // onDragOver={(e) => dragOverHandler(e)}
        // onDrop={(e) => dropHandler(e, label)}
        // onClick={}
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
  )
}

export default Card;
