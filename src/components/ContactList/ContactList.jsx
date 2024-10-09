import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={css.listContact}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContacts={onDeleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;
