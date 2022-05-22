const updatePast = (state = [], action,) => {
  switch (action.type) {
    case 'FETCH_PAST_REQUEST':
      console.log('FETCH_PAST_REQUEST')
      return action.payload;

    default:
      return state.PastLaunches;
  }
};

export default updatePast;