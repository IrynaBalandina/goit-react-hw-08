import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div>
    <h2 className={style.registration}>Registration</h2>
    <RegistrationForm />
  </div>
  )
}

export default RegistrationPage;