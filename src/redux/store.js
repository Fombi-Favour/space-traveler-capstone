import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import RocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: RocketReducer,
  },
});

export function createTestStore() {
  const store = configureStore({
    reducer: {
      mission: missionReducer,
      rocket: RocketReducer,
    },
  });
  return store;
}

export default store;
