import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from '../../routers/Main';
import Details from "../../routers/Details";
import NotFound from "../../routers/NotFound";
import store from '../../redux/store';
import './App.scss';

const App = () =>{
  // const dispatch = useDispatch();
  // const fetch = useMemo(() => {
  //   console.log('render useMemo')
  //   dispatch({ type: 'FETCH_ROCKETS' })
  // }, []);

  console.log('store in App >', store);
  return (
    <Provider store={store}>
      <Router>
        <Header />
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
