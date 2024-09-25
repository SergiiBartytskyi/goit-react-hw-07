import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
// import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList: FC = () => {
  const contacts = useAppSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsContainer}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import { useSelector } from "react-redux";
// import Contact from "../Contact/Contact";
// import { selectFilteredContacts } from "../../redux/contactsSlice";
// import css from "./ContactList.module.css";

// export default function ContactList() {
//   const contacts = useSelector(selectFilteredContacts);

//   return (
//     <ul className={css.contactsContainer}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// }
