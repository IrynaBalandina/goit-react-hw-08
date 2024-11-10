
import style from  './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from './redux/contacts/selectors';

import { useEffect } from 'react';
 
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
    <h1 className = {style.title}>Phonebook</h1>
   
    <ContactForm/>
    <SearchBox />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList/>

  </div>
  )
}
export default App;