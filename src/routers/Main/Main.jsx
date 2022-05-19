import React from "react";
import Card from "../../components/Card";
import { connect} from 'react-redux';
import './Main.scss';
import getUpcomming from '../../services/getUpcomming';
import getRockets from '../../services/getRockets';
import getPast from '../../services/getPast';

getUpcomming();
getRockets();
getPast();

const Main = () =>{
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

const mapStateToProps = (state) => {
  console.log (state);
  return {
    rockets: state.rockets,
  }
}

export default connect(mapStateToProps, null)(Main);
