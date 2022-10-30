import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './FilterContacts/Filter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        <Input />
        <ListContacts />
      </Section>
    </>
  );
};
