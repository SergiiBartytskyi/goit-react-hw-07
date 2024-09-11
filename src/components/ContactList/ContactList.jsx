import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/selectors";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";

// const getVisibleContacts = (contacts, filteredName) => {
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filteredName.toLowerCase())
//   );
// };

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  // const filteredName = useSelector(selectNameFilter);

  // const visibleContacts = getVisibleContacts(contacts, filteredName);

  return (
    <ul className={css.contactsContainer}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
