import React from "react";
import { Provider } from 'react-redux';
import Main from '../../routers/Main';
import store from '../../redux/store';
import './App.scss';

const App = () =>{
  console.log('store in App >', store);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
