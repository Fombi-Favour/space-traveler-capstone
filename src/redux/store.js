import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import RocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: RocketReducer,
  },
});

export default store;
