import updateRockets from './rockets';
import updateUpcomming from './upcomming';
import updatePast from './past';
import updateChoice from './choice';

const reducer = (state, action) => {
  console.log('reducer >', action);
  return (
    {
      rockets: updateRockets(state, action),
      launches: updateUpcomming(state, action),
      pastLaunches: updatePast(state, action),
      myLaunches: updateChoice(state, action)
    }
  );
};

export default reducer;
