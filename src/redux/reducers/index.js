import updateRockets from './rockets';
import updateUpcomming from './upcomming';
import updatePast from './past';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      rockets: updateRockets(state, action),
      launches: updateUpcomming(state, action),
      PastLaunches: updatePast(state, action),
    }
  );
};

export default reducer;
