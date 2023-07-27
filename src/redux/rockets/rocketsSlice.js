import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
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
      state.content = data;
      state.status = 'completed';
    },
    reservedRocket: (state, action) => {
      state.content = state.content.map((rockets) => {
        if (rockets.id !== action.payload) return rockets;
        return { ...rockets, reserved: !rockets.reserved };
      });
    },
  },
});

export const { setupRocket, reservedRocket } = rocketsSlice.actions;

export const selectRocket = (state) => state.rocket;

export default rocketsSlice.reducer;
