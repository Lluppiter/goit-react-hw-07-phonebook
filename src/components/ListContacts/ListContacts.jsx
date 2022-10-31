import styles from '../ListContacts/ListContacts.module.css';
import { ItemContacts } from './ItemContacts/ItemContacts';
import { useSelector } from 'react-redux';
import { selectLoader, selectError } from 'redux/contacts/contactSelector';

export const ListContacts = () => {
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
      <ul className={styles.ListContacts}>
        <ItemContacts />
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};
