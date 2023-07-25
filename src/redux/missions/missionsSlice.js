import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  status: 'loading',
};

export const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setupMission: (state, action) => {
      const data = action.payload.map((item) => {
        const object = {};
        object.mission_id = item.mission_id;
        object.mission_name = item.mission_name;
        object.description = item.description;
        object.wikipedia = item.wikipedia;
        return object;
      });
      state.value = data;
      state.status = 'completed';
    },
    reservedMission: (state, action) => {
      state.value = state.value.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
    },
  },
});

export const { setupMission, reservedMission } = missionsSlice.actions;

export const selectMission = (state) => state.mission;

export default missionsSlice.reducer;
