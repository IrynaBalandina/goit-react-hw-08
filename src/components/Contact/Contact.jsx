
import style from './Contact.module.css';
import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
    <div className = {style.contact}>
      <div className = {style.contactInfo}>

      <p>
          <FaUser className={style.icon} />
          Name: {contact.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          Phone: {contact.number}
        </p>
      </div>
      <div className={style.buttonBlock}>
      <button
        className={style.button}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
      </div>
    </div></>
  )
}

export default Contact;
