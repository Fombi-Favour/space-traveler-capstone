import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setupMission: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setupMission } = missionsSlice.actions;

export const selectMission = (state) => state.mission.value;

export default missionsSlice.reducer;
