import React, { useEffect, useMemo } from "react";
import Card from "../../components/Card";
import { connect, useSelector, useDispatch } from 'react-redux';
import './Main.scss';
import { fetchRockets } from "../../redux/actions";
import getUpcomming from '../../services/getUpcomming';
import getRockets from '../../services/getApi';
import getPast from '../../services/getPast';

// getUpcomming();
// getRockets();
// getPast();

const Main = () =>{
  const store = useSelector(store=>store);
  console.log(' main store >', store);
  const dispatch = useDispatch();

  const fetch = useMemo(() => {
    console.log('render useMemo')
    dispatch({ type: 'FETCH_ROCKETS' })
    // dispatch({ type: 'FETCH_UPCOMMING' })
  }, []);
  console.log('fetch Memo', fetch);
  
  // dispatch({ type: 'FETCH_ROCKETS' });

  // console.log('rockets >', rockets);
  // console.log('store >', props);
  return (
    <main className="Main">
      <div className="Main-Title">
        <h1 className="Title-Text">
          Explore the space
        </h1>
        <img  className="Title-Logo" 
              src="../earth.svg" 
              alt="Earth" />
      </div>
      <div className="Main-Launches">
        <div className="Launch-Col">
          <h2 className="Launch-Title">
            past launches
          </h2>
          <div className="Launch-List">
            <Card />
            <Card />
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            launches
          </h2>
          <div className="Launch-List">
            <Card />
          </div>
        </div>
        <div className="Launch-Block">
          <h2 className="Launch-Title">
            my launches
          </h2>
          <div className="Launch-List">
            <Card />
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
