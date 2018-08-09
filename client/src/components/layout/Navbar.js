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
          <Link className="nav-link" to="/posts">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="/"
            onClick={this.signOutHandle.bind(this)}
            className="nav-link"
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
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        </li>
      </ul>
    );
    // transparent navbar-inverse
    return (
      <nav className="shadow navbar navbar-expand-sm navbar-dark bg-dark mb-4 fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevNetWork
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link>
              </li>
            </ul>
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
