import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <div className='col-6'>
        <ContactForm />
      </div>
      <div className='col-6'>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
