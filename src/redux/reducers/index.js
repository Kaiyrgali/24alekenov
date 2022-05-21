import updateRockets from './rockets';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      rockets: updateRockets(state, action),
    }
  );
};

export default reducer;
