const updatePast = (state = [], action,) => {
  switch (action.type) {
    case 'FETCH_PAST_REQUEST':
      return action.payload;
    default:
      return state.pastLaunches;
  }
};

export default updatePast;