import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (event) =>
    setContact({ ...contact, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <div className='mb-3'>
        <label htmlFor='nameInput' className='form-label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='form-control'
          id='nameInput'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='emailInput' className='form-label'>
          Email
        </label>
        <input
          type='email'
          name='email'
          className='form-control'
          id='emailInput'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='phoneInput' className='form-label'>
          Phone
        </label>
        <input
          type='text'
          name='phone'
          className='form-control'
          id='phoneInput'
          placeholder='Phone'
          value={phone}
          onChange={onChange}
        />
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='type'
          id='personalRadio'
          value='personal'
          checked={type === 'personal'}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='personalRadio'>
          Personal
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='type'
          id='professionalRadio'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />
        <label className='form-check-label' htmlFor='professionalRadio'>
          Professional
        </label>
      </div>
      <div className='mt-3'>
        <button className='btn btn-primary me-2' type='submit'>
          {current ? 'Update Contact' : 'Add Contact'}
        </button>
        <button className='btn btn-light' type='button' onClick={clearAll}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
