import React from "react";
import './Card.scss';

const Card = ({ label, draggable, date, rocket, name,
  dragStartHandler, 
  // dragEndHandler,
  //  dragOverHandler, 
  //  dropHandler 
  }) =>{
  // console.log('in Card >', draggable, date, rocket, name)
  return (
    <div 
      className="Card"
      id={name}
      draggable={draggable}
      onDragStart={(e) => dragStartHandler(e, label)}
      // onDragLeave={(e) => dragEndHandler(e)}
      // onDragEnd={(e) => dragEndHandler(e)}
      // onDragOver={(e) => dragOverHandler(e)}
      // onDrop={(e) => dropHandler(e, label)}
      // onClick={(e) => clickCard(e)}
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
  )
}

export default Card;
