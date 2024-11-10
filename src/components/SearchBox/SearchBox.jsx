

import style from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';


const SearchBox = ( ) => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className = {style.searchField}>
      <p className = {style.searchTitle}>Find contacts by name</p>
   <input 
   className = {style.searchInput}
   type="text" 
   value = {value}  
   onChange={handleSearch}
  

   
 />
    </div>
  )
}

export default SearchBox;