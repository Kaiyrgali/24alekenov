import {useMemo} from "react";
import { useDispatch } from 'react-redux';
import './Fetch.scss';

const Fetch = () => {
  const dispatch = useDispatch();
  const fetch = useMemo(() => {
    console.log('render useMemo')
    dispatch({ type: 'FETCH_ROCKETS' })
  }, []);

  return null;
}

export default Fetch;
