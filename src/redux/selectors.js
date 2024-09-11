import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (state) => state.contacts;
export const selectContacts = (state) => state.contacts.items;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactName) => {
    // const contacts = selectContacts(state);
    // const contactName = selectNameFilter(state);

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactName.toLowerCase())
    );
  }
);
// export const selectVisibleContacts = (state) => {
//   const contacts = selectContacts(state);
//   const contactName = selectNameFilter(state);

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(contactName.toLowerCase())
//   );
// };
