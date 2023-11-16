import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/contactsSlice';
import { filtersSlice } from 'redux/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filtersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
