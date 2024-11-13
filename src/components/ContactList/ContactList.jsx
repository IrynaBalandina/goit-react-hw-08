

import { selectFilteredContacts} from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import style from './ContactList.module.css'
import { useSelector } from "react-redux";


const ContactList = ()=> {

  const filteredContacts = useSelector(selectFilteredContacts);
console.log(filteredContacts);
  
  return (
    <ul className={style.list}>
      {filteredContacts?.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;

