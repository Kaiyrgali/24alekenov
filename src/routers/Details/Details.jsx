import React, {useState} from "react";
import { useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import './Details.scss';

const Details = () =>{
  const store = useSelector(store=>store);
  const [card, setCard] = useState(null)
  const params = useParams();
  const prodId = params.id;
  if (card === null) {
    for (let key in store) {
      const currentCard = store[key].filter(item => item.id === prodId);
      if (currentCard.length !== 0) {
        setCard(prev => currentCard);
        break;
      }
    }
  }
  console.log(card)
  return (
    <Link to="/">
      <h1>
        Мы изучаем JS
      </h1>
    </Link>
    
  )
}

export default Details;
