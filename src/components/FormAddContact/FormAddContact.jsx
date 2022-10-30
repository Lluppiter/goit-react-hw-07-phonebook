import styles from '../FormAddContact/FormAddContacts.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContacts}>
      <div className={styles.formItem}>
        <h3 className={styles.formTitle}>Name</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          className={styles.formInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={styles.formItem}>
        <h3 className={styles.formTitle}>Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInput}
          className={styles.formInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={styles.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
