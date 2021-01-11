import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const location = useLocation();

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className='nav-item text-light'>
        <a href='#!' className='nav-link active'>
          Hello {user?.name}
        </a>
      </li>
      <li className='nav-item'>
        <a href='#!' className='nav-link' onClick={onLogout}>
          <i className='fas fa-sign-out-alt'></i> Logout
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link
          className={`nav-link ${
            location.pathname === '/login' ? 'active' : ''
          }`}
          to='/login'
        >
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`nav-link ${
            location.pathname === '/register' ? 'active' : ''
          }`}
          to='/register'
        >
          Register
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <i className={icon}></i> {title}
        </Link>
        <div className='nav-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
