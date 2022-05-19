const updateRockets = (
  state = {
    rockets: {
      id: '',
      name: '',
    },
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_ROCKETS_REQUEST':
      console.log(state, action)
      return {
        id: action.payload,
      };

    default:
      return state.rockets;
  }
};

export default updateRockets;