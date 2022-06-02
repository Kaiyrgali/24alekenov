import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './Details.scss';

function Details() {
  const params = useParams();
  const prodId = params.id;
  const store = useSelector((store) => store);
  const [card, setCard] = useState(null);
  if (card === null) {
    for (const key in store) {
      if (Object.prototype.hasOwnProperty.call(store, key)) {
        const currentCard = store[key].filter((item) => item.id === prodId);
        if (currentCard.length !== 0) {
          setCard((prev) => currentCard);
          break;
        }
      }
    }
  }

  if (card === null) return null;
  return (
    <div className="Details">
      <Link to="/">
        <h1>
          Back to FlightShop
        </h1>
      </Link>
      <h2 className="Details-Title">Details</h2>
      <h3 className="Details-Name">
        Ship&apos;s name -
        {card[0].name}
      </h3>
      <h4 className="Details-Rocket">
        Rocket -
        {card[0].rocket}
      </h4>
      <h5 className="Details-Date">
        Local date -
        {card[0].date_local}
      </h5>
      <p>
        Flight number -
        {card[0].flight_number}
      </p>
    </div>
  );
}

export default Details;
