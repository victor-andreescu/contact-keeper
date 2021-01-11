import React, { Fragment, useContext } from 'react';
import { TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (!contacts.length) {
    return <h4>Please add a contact</h4>;
  }

  const contactsList = filtered ? filtered : contacts;

  return (
    <Fragment>
      <TransitionGroup>
        {contactsList.map((contact) => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
