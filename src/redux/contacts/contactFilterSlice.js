import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactFilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChange(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { onChange } = contactFilterSlice.actions;
export default contactFilterSlice.reducer;
