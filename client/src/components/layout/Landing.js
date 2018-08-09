import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="animated bounceInDown display-3 mb-4 mt-4">
                  Developer Network
                </h1>
                <p className="animated bounceInLeft lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr className="bg-secondary" />
                <Link
                  to="/signup"
                  className="animated bounceInRight btn btn-lg btn-dark mr-2"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="animated bounceInRight btn btn-lg btn-secondary"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
