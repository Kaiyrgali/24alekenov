import React, { useEffect, useMemo, useState } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
import Alert from "../../components/Alert/Alert";
import './Main.scss';
import { fetchRockets } from "../../redux/actions";

const getDate = (day) => {
  const dateParse = Date.parse(day)
  const newDate = new Date(dateParse);
  const dateCard = newDate.toDateString();
  return dateCard
}

const Main = () =>{
  const store = useSelector(store=>store);
  console.log(' main store >', store);
  const dispatch = useDispatch();
  const dropElem = document.getElementById('droptarget');
  const dragElem = document.getElementById('dragtarget');

  const [event, setEvent] = useState(null); // текущий Лабел -данные карточки
  // const [past, setPast] = useState(undefined); // Список сфетченный
  // const [choice, setChoice] = useState(undefined); // myLaunches
  const [alertStyle, setAlertStyle] = useState('none'); // модальное окно
  const [alertText, setAlertText] = useState('');

  const fetch = useMemo(() => {
    console.log('render useMemo')
    dispatch({ type: 'FETCH_ROCKETS' })
  }, []);

  // useEffect(() => {
  //   setChoice(store.myLaunches);
  //     }, [store]);

  const title = ( // Можно выделить в отдельный компонент
    <div className="Title">
      <h1 className="Title-Text">
        Explore the space
      </h1>
      <img  className="Title-Logo" // сюда добавить ссылку возвращения на главную
            src="../earth.svg" 
            alt="Earth" />
    </div>
  )


  const dragStartHandler = (e, label) => {
    setEvent( prev => label);
  }

  const dropHandler = (e) => {
    dropElem.style.backgroundColor = "";
    setAlertText('Russian warship, go fuck yourself')
    store.myLaunches.includes(event) ? null : setAlertStyle( prev => 'flex');
    'Russian warship, go fuck yourself'
    // console.log(e.target.id)
    // console.log(dropElem.id)
    // e.target.id !== 'dragtarget' ? console.log('delete') : console.log('nothing');
  }

  function allowDrop(e) {
    e.preventDefault();
    store.myLaunches.includes(event) ? dropElem.style.backgroundColor = "red" : dropElem.style.backgroundColor = "green";
    // const dropData = event.dataTransfer.getData("Object");
    // console.log('allowDrop >', dropData)
    // event.target.style.border = "4px dotted green";
  }

  const deleteCardFromMyLaunches = (e) => {
    dropElem.style.backgroundColor = "";
    setAlertText('Do you really want to cancel your trip ?')
    // console.log('delete >>>', e.target)
    e.target !== '' ? setAlertStyle( prev => 'flex') : null;
  }

  const yesButton = () => {
    setAlertStyle( prev => 'none');
    alertText ===  'Do you really want to cancel your trip ?' ? dispatch({ type: 'DELETE_MYLAUNCHES', action: event }) : dispatch({ type: 'ADD_MYLAUNCHES', action: event })
  }

  const noButton = () => {
    setAlertStyle( prev => 'none')
  }

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
                  // draggable={false}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1] }
                  name={item.name}
                  dragStartHandler={()=>console.log('1')}
                />
              )}
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            launches
          </h2>
          <div className="Launch-List" id="dragtarget"  onDragOver={(e)=>allowDrop(e)} 
          onDrop={(e)=>deleteCardFromMyLaunches(e)}>
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
                  // dragEndHandler={dragEndHandler}
                  // dragOverHandler={dragOverHandler}
                  // dropHandler={dropHandler}
                  // clickCard={clickCard}
                />
            )}
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            my launches
          </h2>
          <div className="Launch-List" id="droptarget"  onDragOver={(e)=>allowDrop(e)} 
          onDrop={(e)=>dropHandler(e)}
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
                  // onDrop={deleteCardFromMyLaunches}
                />
              )}
          </div>
        </div>
      </div>
    </main>
  )
}

// const mapStateToProps = (state) => {
//   console.log ('Main mapStateToProps > ', state);
//   return {
//     rockets: getRockets(state),
//   }
// }


export default Main;

// export default connect(mapStateToProps, null)(Main);
