import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fetch from "../Fetch";
import Main from '../../routers/Main';
import Details from "../../routers/Details";
import NotFound from "../../routers/NotFound";
import store from '../../redux/store';
import './App.scss';

const App = () =>{
  return (
    <Provider store={store}>
      <Router>
        <Fetch />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
