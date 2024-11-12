import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <h2 className={style.login}>Sign Up</h2>
      <LoginForm />
    </div>
  );
};
export default LoginPage;