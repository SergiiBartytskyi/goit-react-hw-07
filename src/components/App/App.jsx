import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectContacts,
  selectContactsError,
  selectContactsLoading,
} from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";

// import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  // const { items, loading, error } = useSelector(selectContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>} */}
      {loading && !error && <b>Request in progress ...</b>}
      {/* {items.length > 0 && <ContactList />} */}
      <ContactList />
    </Layout>
  );
};

export default App;
