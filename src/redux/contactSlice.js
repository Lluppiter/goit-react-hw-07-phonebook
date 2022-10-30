import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { defaultContacts } from 'data/contact';

const initialState = {
  contacts: defaultContacts,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      const overlap = state.contacts.filter(
        contact =>
          contact.name.toLowerCase() === payload.name.toLowerCase() &&
          contact.number.toLowerCase() === payload.number.toLowerCase()
      );
      if (overlap.length === 0) {
        state.contacts.push({ id: nanoid(), ...payload });
      } else {
        alert('This contact has been added');
      }
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
