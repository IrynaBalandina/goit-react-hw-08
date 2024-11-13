import { Formik, Form, Field, ErrorMessage } from 'formik';
import { apiLoginUser } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import style from './LoginForm.module.css';


const INITIAL_VALUES = {
  
   
    email:"", 
    password:"", 
   
   };

   export const LoginUserSchema = Yup.object({
    
   
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
      
      password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("Password is required")
     
  });
  
 
  const LoginForm = () => {
    
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      dispatch(apiLoginUser(values));
      actions.resetForm();
    };
  
    return (
  <div className={style.wrapper}>
      <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={LoginUserSchema}
       onSubmit={handleSubmit}>
        
  
              <Form className={style.form}>
          <div className={style.listForm}>
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
  <button className = {style.button} type="submit">Login</button>
  </div>
  </div>
              </Form>
      </Formik>
      </div>
    )
  }

export default LoginForm;