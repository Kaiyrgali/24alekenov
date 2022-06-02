import React, { useState } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
import Alert from "../../components/Alert/Alert";
import './Main.scss';

const getDate = (day) => {
  const dateParse = Date.parse(day)
  const newDate = new Date(dateParse);
  const dateCard = newDate.toDateString();
  return dateCard
}

const Main = () =>{
  const store = useSelector(store=>store);
  const dispatch = useDispatch();
  const dropElem = document.getElementById('droptarget');
  const [event, setEvent] = useState(null);
  const [alertStyle, setAlertStyle] = useState('none');
  const [alertText, setAlertText] = useState('');

  const title = (
    <div className="Title">
      <h1 className="Title-Text">
        Explore the space
      </h1>
      <img  className="Title-Logo"
            src="../earth.svg" 
            alt="Earth" />
    </div>
  )

  const dragStartHandler = (e, label) => {
    setEvent( prev => [label, e.target.parentElement.parentElement.id]);
  }

  const addCard = (e) => {
    dropElem.style.backgroundColor = "";
    setAlertText('Do you want to add a new trip into your cart ?');
    store.myLaunches.includes(event[0]) ? null : setAlertStyle( prev => 'flex');
  }

  const allowDrop = (e) => {
    e.preventDefault();
    store.myLaunches.includes(event[0]) ? dropElem.style.backgroundColor = "red" : dropElem.style.backgroundColor = "green";
  }

  const deleteCard = (e) => {
    dropElem.style.backgroundColor = "";
    if (event[1] !== 'dragtarget') {
      setAlertText('Do you really want to cancel your trip ?')
      e.target !== '' ? setAlertStyle( prev => 'flex') : null;
    }
  }

  const yesButton = () => {
    setAlertStyle( prev => 'none');
    alertText ===  'Do you really want to cancel your trip ?' ? dispatch({ type: 'DELETE_MYLAUNCHES', action: event[0] }) : dispatch({ type: 'ADD_MYLAUNCHES', action: event[0] })
  }

  const noButton = () => {
    setAlertStyle( prev => 'none')
  }
  
  if (!store.rockets) return <Spinner />
  
  return (
    <main className="Main">
      {title}
      <Alert
        text={alertText}
        style={alertStyle}
        yesButton={yesButton}
        noButton={noButton}
      />
      <div className="Main-Launches">
        <div className="Launch-Col">
          <h2 className="Launch-Title">
            past launches
          </h2>
          <div className="Launch-List">
            {store.pastLaunches === undefined ?
              <Spinner /> :
              store.pastLaunches.map((item) => 
                <Card 
                  key={item.id}
                  label={item}
                  draggable={false}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1] }
                  name={item.name}
                  // dragStartHandler={()=>console.log('1')}
                />
              )}
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            launches
          </h2>
          <div className="Launch-List" id="dragtarget"  onDragOver={(e)=>allowDrop(e)} 
          onDrop={(e)=>deleteCard(e)}>
            {store.launches === undefined ?
              <Spinner /> :
              store.launches.map((item) => 
                <Card 
                  key={item.id}
                  label={item}
                  draggable={true}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1]}
                  name={item.name}
                  dragStartHandler={dragStartHandler}
                />
            )}
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            my launches
          </h2>
          <div className="Launch-List" id="droptarget"  onDragOver={(e)=>allowDrop(e)} 
          onDrop={(e)=>addCard(e)}
          >
            {store.myLaunches === undefined ?
              null :
              store.myLaunches.map((item) => 
                <Card 
                  key={item.id}
                  label={item}
                  draggable={true}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1] }
                  name={item.name}
                  dragStartHandler={dragStartHandler}
                />
              )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;