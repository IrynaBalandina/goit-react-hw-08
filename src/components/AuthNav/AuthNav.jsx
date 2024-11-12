
import style from './AuthNav.module.css';
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={style.navContainer}>
    <nav className={style.nav}>
      <NavLink className={style.login} to="/login">
        Login
      </NavLink>
      <NavLink className={style.register} to="/register">
        Register
      </NavLink>
    </nav>
  </div>
  )
}

export default AuthNav;