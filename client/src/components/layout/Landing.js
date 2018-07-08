import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Codemp4 from '../../img/Love-Coding.mp4';
import Codeogv from '../../img/Love-Coding.ogv';
import Codewebm from '../../img/Love-Coding.webm';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <video id="background" autoPlay loop muted>
          <source src={Codemp4} type="video/mp4" />
          <source src={Codeogv} type="video/ogg" />
          <source src={Codewebm} type="video/ogg" />
        </video>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Network</h1>
                <p className="lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/signin" className="btn btn-lg btn-light">
                  Signin
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
