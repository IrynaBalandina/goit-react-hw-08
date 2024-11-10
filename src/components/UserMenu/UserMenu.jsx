import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";

const UserMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUserData);
  return (
    <div>UserMenu</div>
  )
}

export default UserMenu;