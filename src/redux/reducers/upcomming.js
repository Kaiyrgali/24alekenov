const updateUpcomming = (state = [], action,) => {
  switch (action.type) {
    case 'FETCH_UPCOMMING_REQUEST':
      console.log('FETCH_UPCOMMING_REQUEST')
      console.log(action.payload)
      return action.payload;

    default:
      return state.launches;
  }
};

export default updateUpcomming;