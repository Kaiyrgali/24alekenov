import React from "react";
import { Provider } from 'react-redux';
import Main from '../../routers/Main';
import store from '../../store';
import './App.scss';

const App = () =>{
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
