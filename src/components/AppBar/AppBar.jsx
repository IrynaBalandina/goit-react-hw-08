import style from "./AppBar.module.css"
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Navigation from '../Navigation/Navigation';
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";


const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
          <div>
      <header className={style.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
    </div>
  )
}

export default AppBar;