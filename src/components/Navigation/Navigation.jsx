
import { useSelector } from "react-redux";
import { selectIsLoggedIn} from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from './Navigation.module.css'

const buildNavLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
  };

const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
   
  return (
    <div className={style.navContainer}>
    <nav className={style.nav}>
      <NavLink className={buildNavLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildNavLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  </div>
  )
}

export default Navigation;