import styles from '../ItemContacts/ItemContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectFilter } from 'redux/contactSelector';
import { deleteContact } from 'redux/contactSlice';

export const ItemContacts = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onClick = e => {
    dispatch(deleteContact(e.target.value));
  };
  return (
    <>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(user => (
          <li key={user.id} id={user.id} className={styles.listItem}>
            <p className={styles.itemText}>
              {user.name}: {user.number}
            </p>
            <button
              className={styles.itemBtn}
              type="button"
              value={user.id}
              onClick={onClick}
            >
              &#215;
            </button>
          </li>
        ))}
    </>
  );
};
