import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { ContactsState, Contact } from "./types/contacts";
import { RootState } from "./store";
import { selectNameFilter } from "./filtersSlice";

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state: ContactsState) => {
  state.loading = true;
};

const handleRejected = (
  state: ContactsState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload || "Unknown error";
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (state: ContactsState, action: PayloadAction<Contact[]>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(
        addContact.fulfilled,
        (state: ContactsState, action: PayloadAction<Contact>) => {
          state.loading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(
        deleteContact.fulfilled,
        (state: ContactsState, action: PayloadAction<Contact>) => {
          state.loading = false;
          state.error = null;
          const idx = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          state.items.splice(idx, 1);
          // state.items.filter((contact) => contact.id !== action.payload.id);
        }
      )
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectContactsLoading = (state: RootState) =>
  state.contacts.loading;

export const selectContactsError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactName.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "./filtersSlice";
// import { fetchContacts, addContact, deleteContact } from "./contactsOps";
// import { Contacts } from "./types/contacts";

// const handlePending = (state) => {
//   state.loading = true;
// };

// const handleRejected = (state, actions) => {
//   state.loading = false;
//   state.error = actions.payload;
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, actions) => {
//         state.loading = false;
//         state.error = null;
//         state.items = actions.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, actions) => {
//         state.loading = false;
//         state.error = null;
//         state.items.push(actions.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, actions) => {
//         state.loading = false;
//         state.error = null;
//         const idx = state.items.findIndex(
//           (contact) => contact.id === actions.payload.id
//         );
//         state.items.splice(idx, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejected);
//   },
// });

// export const selectContacts = (state) => state.contacts.items;

// export const selectContactsLoading = (state) => state.contacts.loading;

// export const selectContactsError = (state) => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, contactName) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(contactName.toLowerCase())
//     );
//   }
// );

// export default contactsSlice.reducer;
