import { useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectContactsLoading);
  const error = useAppSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </Layout>
  );
};

export default App;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectContactsError,
//   selectContactsLoading,
// } from "../../redux/contactsSlice";
// import { fetchContacts } from "../../redux/contactsOps";
// import { Layout } from "../Layout/Layout";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import Loader from "../Loader/Loader";

// const App = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectContactsLoading);
//   const error = useSelector(selectContactsError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && !error && <Loader />}
//       {error && <b>{error}</b>}
//       <ContactList />
//     </Layout>
//   );
// };

// export default App;
