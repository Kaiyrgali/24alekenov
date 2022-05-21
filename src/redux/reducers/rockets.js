const updateRockets = (state = [], action,) => {
  switch (action.type) {
    case 'FETCH_ROCKETS_REQUEST':
      console.log('FETCH_ROCKETS_REQUEST')
      console.log(action.payload)
      return action.payload;

    default:
      return state.rockets;
  }
};

export default updateRockets;