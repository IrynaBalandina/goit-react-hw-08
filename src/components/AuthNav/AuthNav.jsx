
import style from './AuthNav.module.css';
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};


const AuthNav = () => {
  return (
    <div className={style.navContainer}>
    <nav className={style.nav}>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </nav>
  </div>
  )
}

export default AuthNav;