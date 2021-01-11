import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const { name, email, password, passwordConfirmation } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== passwordConfirmation) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3'>
        <h1>
          Account <span className='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
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
              type='name'
              name='email'
              className='form-control'
              id='emailInput'
              placeholder='Email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='passwordInput' className='form-label'>
              Password
            </label>
            <input
              type='name'
              name='password'
              className='form-control'
              id='passwordInput'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='passwordConfirmationInput' className='form-label'>
              Password Confirmation
            </label>
            <input
              type='name'
              name='passwordConfirmation'
              className='form-control'
              id='passwordConfirmationInput'
              placeholder='Password Confirmation'
              value={passwordConfirmation}
              onChange={onChange}
            />
          </div>
          <button className='btn btn-primary btn-block' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
