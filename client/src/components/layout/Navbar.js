import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  signOutHandle(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.signOutUser();
    this.props.history.push('/signin');
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    //for signed in users
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            to="/profiles"
          >
            <i className="fas fa-users small" /> Developers
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            to="/posts"
          >
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="/"
            onClick={this.signOutHandle.bind(this)}
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark pb-2"
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                width: '25px',
                marginRight: '5px',
                borderRadius: '25px'
              }}
            />
            Sign Out
          </a>
        </li>
      </ul>
    );

    //for new users
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            to="/profiles"
          >
            <i className="fas fa-users small" /> Developers
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            to="/signup"
          >
            <i className="fas fa-user-plus small" /> Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark"
            to="/signin"
          >
            <i className="fas fa-user small" /> Sign in
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-white text-dark border-bottom mb-4 fixed-top">
        <div className="container">
          <Link className="navbar-brand text-dark" to="/">
            <h5>
              <strong>{'<DEV/>'}</strong>
            </h5>
          </Link>
          <h1 className="text-secondary">Network</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  signOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signOutUser, clearCurrentProfile }
)(withRouter(Navbar));
