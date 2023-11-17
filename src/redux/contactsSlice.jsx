import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };

const handleRejected = (state, { payload }) => {
  console.log(payload);

  state.isLoading = false;
  state.error = payload;
};

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const fetchFulfilled = (state, { payload }) => {
  state.contacts = payload;
};

const addFulfilled = (state, { payload }) => {
  console.log(payload);
  
  state.contacts.push(payload);
};

const deleteFulfilled = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchFulfilled)
      .addCase(addContact.fulfilled, addFulfilled)
      .addCase(deleteContact.fulfilled, deleteFulfilled)
      // .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      // .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export default contactsSlice.reducer;
