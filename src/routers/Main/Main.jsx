import React, { useEffect, useMemo } from "react";
import Card from "../../components/Card";
import { connect, useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
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

  const fetch = useMemo(() => {
    console.log('render useMemo')
    dispatch({ type: 'FETCH_ROCKETS' })
  }, []);

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

  return (
    <main className="Main">
      {title}
      <div className="Main-Launches">
        <div className="Launch-Col">
          <h2 className="Launch-Title">
            past launches
          </h2>
          <div className="Launch-List">
            {store.PastLaunches === undefined ?
              <Spinner /> :
              store.PastLaunches.map((item) => 
                <Card 
                  key={item.id}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1] }
                  name={item.name}
                />
              )}; 
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            launches
          </h2>
          <div className="Launch-List">
            {store.launches === undefined ?
              <Spinner /> :
              store.launches.map((item) => 
                <Card 
                  key={item.id}
                  date={getDate(item.date_local)}
                  rocket={store.rockets.find((array)=>array[0]===item.rocket)[1]}
                  name={item.name}
                />
            )}; 
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            my launches
          </h2>
          <div className="Launch-List">

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
