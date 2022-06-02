const updateChoice = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MYLAUNCHES':
      return [...state.myLaunches, action.action]
    case 'DELETE_MYLAUNCHES':
      const index = state.myLaunches.indexOf(action.action);
      state.myLaunches.splice(index, 1);
      return [...state.myLaunches]
    default:
      return [];
  }
};

export default updateChoice;