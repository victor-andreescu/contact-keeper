import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (!filtered) {
      text.current.value = '';
    }
    clearFilter();
    // eslint-disable-next-line
  }, []);

  const onChange = (event) => {
    if (text.current.value !== '') {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          ref={text}
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
        {text.current.value !== '' ? (
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={clearFilter}
          >
            Clear
          </button>
        ) : (
          ''
        )}
      </div>
    </form>
  );
};

export default ContactFilter;
