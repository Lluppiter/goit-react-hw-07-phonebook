import styles from '../ListContacts/ListContacts.module.css';
import { ItemContacts } from './ItemContacts/ItemContacts';

export const ListContacts = () => {
  return (
    <ul className={styles.ListContacts}>
      <ItemContacts />
    </ul>
  );
};
