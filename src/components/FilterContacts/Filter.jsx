import styles from '../FilterContacts/Filter.module.css';
import { useDispatch } from 'react-redux';
import { onChange } from 'redux/contactFilterSlice';

export const Input = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(onChange(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterTxt}>Find contacts by name</p>
      <input
        className={styles.filterInput}
        name="filter"
        onChange={handleFilter}
      />
    </div>
  );
};
