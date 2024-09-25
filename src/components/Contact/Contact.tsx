import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Contact as ContactType } from "../../redux/types/contacts";
import { deleteContact } from "../../redux/contactsOps";
import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
import css from "./Contact.module.css";

interface ContactProps {
  contact: ContactType;
}

const Contact: FC<ContactProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactWraper}>
          <IoPersonOutline />
          {contact.name}
        </li>
        <li className={css.contactWraper}>
          <IoPhonePortraitOutline />
          {contact.number}
        </li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsOps";
// import { IoPersonOutline, IoPhonePortraitOutline } from "react-icons/io5";
// import css from "./Contact.module.css";

// export default function Contact({ contact }) {
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(contact.id));

//   return (
//     <div className={css.contactContainer}>
//       <ul>
//         <li className={css.contactWraper}>
//           <IoPersonOutline />
//           {contact.name}
//         </li>
//         <li className={css.contactWraper}>
//           <IoPhonePortraitOutline />
//           {contact.number}
//         </li>
//       </ul>
//       <button className={css.contactBtn} onClick={handleDelete}>
//         Delete
//       </button>
//     </div>
//   );
// }
