import style from './ContactsPage.module.css'
import { selectIsLoading, selectError } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {toast} from "react-hot-toast";

import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
        if (isError) {
          toast.error("Failed to load contacts");
        }
      }, [dispatch, isError]);

  return (
    <div>
          <div className={style.contactWrapper}>
      <h1 className={style.title}>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
    </div>
  )
}

export default ContactsPage;