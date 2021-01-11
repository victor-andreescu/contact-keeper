import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import { CSSTransition } from 'react-transition-group';

const ContactItem = ({ contact, ...props }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const nodeRef = useRef(null);

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <CSSTransition
      timeout={500}
      classNames='contact'
      nodeRef={nodeRef}
      {...props}
    >
      <div className='card bg-light my-3' ref={nodeRef}>
        <div className='card-body'>
          <h4 className='card-title'>
            {name}{' '}
            <small className='float-end'>
              <span
                className={`text-capitalize badge ${
                  type === 'professional' ? 'bg-danger' : 'bg-success'
                }`}
              >
                {type}
              </span>
            </small>
          </h4>
          {email && (
            <p className='card-text'>
              <i className='fas fa-envelope-open' /> {email}
            </p>
          )}
          {phone && (
            <p className='card-text'>
              <i className='fas fa-phone' /> {phone}
            </p>
          )}
          <p>
            <button
              className='btn btn-dark btn-sm me-2'
              onClick={() => setCurrent(contact)}
            >
              Edit
            </button>
            <button className='btn btn-danger btn-sm' onClick={onDelete}>
              Delete
            </button>
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
