import style from './UserMenue.module.css'
import { useDispatch, useSelector } from "react-redux";
import {selectUserData } from "../../redux/auth/selectors";
import { apiLogOut } from "../../redux/auth/operations";

const UserMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUserData);
  return (
    <div className={style.menu}>
      <p className={style.userText}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(apiLogOut())}
        className={style.btn}
      >
        Logout
      </button>
    </div>
    );
  
}

export default UserMenu;