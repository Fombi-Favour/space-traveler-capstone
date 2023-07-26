import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export function createTestStore() {
  const store = configureStore({
    reducer: {
      mission: missionReducer,
    },
  });
  return store;
}

export default store;
