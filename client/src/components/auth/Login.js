import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

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
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      login({ email, password });
    }
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3'>
        <h1>
          Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
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
              placeholder='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <button className='btn btn-primary btn-block' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
