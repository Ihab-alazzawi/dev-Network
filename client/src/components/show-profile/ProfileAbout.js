import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

const ProfileAbout = props => {
  const { profile } = props;
  //get first name
  const firstName = profile.user.name.trim().split(' ')[0];
  //skill list
  const skills = profile.skills.map((skill, i) => (
    <div key={i} className="p-3">
      <i className="fa fa-check" />
      {skill}
    </div>
  ));
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-dark">{firstName}'s Bio</h3>
          <p className="lead text-secondary">
            {isEmpty(profile.bio) ? (
              <span>{firstName} dose not have a Bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
          <hr />
          <h3 className="text-center text-dark">Skill Set</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center text-secondary">
              {skills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileAbout;
