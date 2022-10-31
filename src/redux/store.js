import { configureStore } from '@reduxjs/toolkit';
import contactFilterSlice from './contacts/contactFilterSlice';
import contactReducer from './contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: contactFilterSlice,
  },
});
