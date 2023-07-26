import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  status: 'loading',
};

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    setupRocket: (state, action) => {
      const data = action.payload.map((item) => {
        const object = {};
        object.id = item.id;
        object.rocket_name = item.rocket_name;
        object.rocket_type = item.rocket_type;
        object.description = item.description;
        // eslint-disable-next-line prefer-destructuring
        object.flickr_images = item.flickr_images[0];
        object.reserved = false;
        return object;
      });
      state.value = data;
      state.status = 'completed';
    },
    reservedRocket: (state, action) => {
      state.value = state.value.map((rockets) => {
        if (rockets.id !== action.payload) return rockets;
        return { ...rockets, reserved: !rockets.reserved };
      });
    },
  },
});

export const { setupRocket, reservedRocket } = rocketsSlice.actions;

export const selectRocket = (state) => state.rocket;

export default rocketsSlice.reducer;
