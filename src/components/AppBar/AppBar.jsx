import { selectUserDataIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Navigation from '../Navigation/Navigation';


const AppBar = () => {

    const isLoggedIn = useSelector(selectUserDataIsLoggedIn);
  return (
    <div>
          <div className={style.appBar}>
      <header className={style.headerAppBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
    </div>
  )
}

export default AppBar;