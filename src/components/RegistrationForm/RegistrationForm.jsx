import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import 

const INITIAL_VALUES = {
  
    name:"",
    email:"", 
    password:"", 
   
   
  };
  
  
  export const RegisterNewUserSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters")
      .required("Name is required"),
   
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
      
      password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("Phone is required")
     
  });
  
  
  const RegistrationForm = () => {
    
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
      validationSchema={RegisterNewUserSchema}
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
  
  
  <button className = {style.button} type="submit">Registration</button>
              </Form>
      </Formik>
    );
  };

export default RegistrationForm;