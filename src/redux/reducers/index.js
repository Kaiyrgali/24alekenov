import updateRockets from './rockets';

const reducer = (state, action) => {
  return (
    {
      rockets: updateRockets(state, action),
    }
  );
};

export default reducer;
