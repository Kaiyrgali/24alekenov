import updateRockets from './rockets';
import updateUpcomming from './upcomming';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      rockets: updateRockets(state, action),
      launches: updateUpcomming(state, action),
    }
  );
};

export default reducer;
