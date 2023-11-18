import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilters = state => state.filter.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    console.log(contacts);
    
    return contacts.filter(contact =>
       {     console.log(contact);
        return contact.name.toLowerCase().includes(filter.toLowerCase())}
    );
  }
);


