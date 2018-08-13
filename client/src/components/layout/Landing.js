import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import bg from '../../img/developer.jpg';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="animated fadeIn col-md-7">
            <p className="display-3 mb-4 mt-4">Developer Network</p>
            <p className="lead">
              {' '}
              Create a developer profile/portfolio, connect, share posts and get
              help from other developers
            </p>
            <Link
              to="/signup"
              className="btn btn-lg btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark mr-2"
            >
              Get Started
            </Link>
          </div>
          <div className="animated fadeIn col-md-5">
            <div className="landing">
              <img className="bg" src={bg} alt="landing..." />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 text-center">
            <Link
              className="nav-link btn btn-light bg-white rounded-0"
              to="/profiles"
            >
              <h1>connect</h1>
              <i className="fab fa-connectdevelop fa-10x" />
            </Link>
            <hr className="bg-dark" />
          </div>

          <div className="col-md-4 text-center">
            <Link
              className="nav-link btn btn-light bg-white rounded-0"
              to="/posts"
            >
              <h1>Share</h1>
              <i className="fas fa-share-alt fa-10x" />
            </Link>
            <hr className="bg-dark" />
          </div>

          <div className="col-md-4 text-center">
            <Link
              className="nav-link btn btn-light bg-white rounded-0"
              to="/posts"
            >
              <h1>Get Help</h1>
              <i className="fas fa-hands-helping fa-10x" />
            </Link>
            <hr className="bg-dark" />
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
