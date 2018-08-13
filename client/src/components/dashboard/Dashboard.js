import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileButtons from '../dashboard/ProfileButtons';
import Experience from '../dashboard/Experience';
import Education from './Education';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  deleteHandle(e) {
    this.props.deleteAccount();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead text-muted">
            Welcome{' '}
            <Link
              className="bg-white text-secondary"
              to={`/profile/${profile.handle}`}
            >
              {user.name}
            </Link>
          </p>
          <ProfileButtons />
          <Experience experienceArray={profile.experience} />
          <Education educationArray={profile.education} />
          <div style={{ marginBottom: '60px' }} />
          <button
            onClick={this.deleteHandle.bind(this)}
            className="btn btn-danger bg-white text-danger border-left-0 border-right-0 border-top-0 border-danger rounded-0"
          >
            Delete My Account
          </button>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link
            to="/create-profile"
            className="btn btn-lg btn-light bg-white border-left-0 border-right-0 border-top-0 border-dark rounded-0"
          >
            Create Profile
          </Link>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="animated  fadeIn col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProp,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
