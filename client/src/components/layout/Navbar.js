import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutAuth } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logoutAuth }) => {
  const authLinks = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Developers</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    );
  };

  const guestLinks = () => {
    return (
      <ul>
        <li>
          <a href='#!'>Logout</a>
        </li>
      </ul>
    );
  };

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Mooza</Link>
      </h1>
      {!loading && (
        <ul>
          <li>
            <Link to='/'>Developers</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      )}
      {isAuthenticated && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logoutAuth: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Navbar.propTypes = {};

export default connect(mapStateToProps, { logoutAuth })(Navbar);
