import styles from '../ItemContacts/ItemContacts.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contacts/contactOperations';
import { selectVisibleContacts } from 'redux/contacts/contactSelector';

export const ItemContacts = () => {
  const [isShown, setIsShown] = useState(false);

  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isShown) {
      setIsShown(true);
      dispatch(getContacts());
    }
  }, [isShown, dispatch]);

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={styles.listItem}>
          <p className={styles.itemText}>
            {name}: {number}
          </p>
          <button
            className={styles.itemBtn}
            type="button"
            value={id}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            &#215;
          </button>
        </li>
      ))}
    </>
  );
};
