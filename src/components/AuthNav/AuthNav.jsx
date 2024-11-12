import clsx from "clsx";
import style from './AuthNav.module.css';
import { NavLink } from "react-router-dom";


const buildNavLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};


const AuthNav = () => {
  return (
    <div className={style.navContainer}>
    <nav className={style.nav}>
      <NavLink className={buildNavLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={buildNavLinkClass} to="/register">
        Register
      </NavLink>
    </nav>
  </div>
  )
}

export default AuthNav;