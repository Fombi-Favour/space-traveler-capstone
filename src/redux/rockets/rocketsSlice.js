import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  status: 'loading',
};

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
});

export default rocketsSlice.reducer;
