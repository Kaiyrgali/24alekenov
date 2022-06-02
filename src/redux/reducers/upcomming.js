const updateUpcomming = (state = [], action,) => {
  switch (action.type) {
    case 'FETCH_UPCOMMING_REQUEST':
      return action.payload;
    default:
      return state.launches;
  }
};

export default updateUpcomming;