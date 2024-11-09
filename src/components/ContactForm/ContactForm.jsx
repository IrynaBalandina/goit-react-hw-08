import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

import { addContact } from '../../redux/contactsOps';

import { useDispatch} from 'react-redux';


const INITIAL_VALUES = {
  id:"",
  name:"",
  number:"",
 
};

const phoneNumberRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const AddContactSchema = Yup.object ({
 name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters"), 
number: Yup.string().required("Number is required").matches(phoneNumberRegex, "Invalid phone number"), 

 });


const ContactForm = () => {
  
  const dispatch = useDispatch();

  const nameId = useId();
  const phoneId = useId();


  const handleSubmit = (values, actions) => {
    const newContact = {
     name: values.name,
     number: values.number,
     id: nanoid(),
   };
   dispatch(addContact(newContact));
   actions.resetForm();
 };


  return (

    <Formik
    initialValues={INITIAL_VALUES}
    validationSchema={AddContactSchema}
     onSubmit={handleSubmit}>
			<Form className = {style.form}>

<label className = {style.label} htmlFor={nameId}>Name</label>
<Field 
className = {style.field}
type="text" 
name="name" 
placeholder="Jane Dow" 
id={nameId}
/>
<ErrorMessage name="name" component="span" />

<label className = {style.label} htmlFor={phoneId}>Number</label>
<Field 
className= {style.field}
type="phone" 
name="number" 

placeholder = "+38xxxxxxxxxx" 
id = {phoneId}/>
<ErrorMessage name="number" component="span" />


<button className = {style.button} type="submit">Add Contact</button>
			</Form>
    </Formik>
  );
};

export default ContactForm;