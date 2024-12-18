import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/operations';

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
    
    const dispatch = useDispatch()
  const handleSubmit = (values, actions) => {
 
    dispatch(apiRegisterUser(values))
   actions.resetForm();
  };

  
    return (
  <div className={style.wrapper}>
    <h2 className={style.title}>Welcome, user!</h2>
      <p className={style.message}>
     Please, create your account!
      </p>

      <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={RegisterNewUserSchema}
       onSubmit={handleSubmit}>
        
  
              <Form className={style.form}>
                <div className={style.listForm}>
          <label className={style.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={style.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={style.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={style.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={style.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="password"
              component="span"
            />
          </label>
  <div className={style.buttonContainer}>
  <button className = {style.button} type="submit">Registration</button>
  </div>
  </div>
              </Form>
      </Formik>
      </div>
    )
  }

export default RegistrationForm;