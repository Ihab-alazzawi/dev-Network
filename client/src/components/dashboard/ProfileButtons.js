import React from 'react';
import { Link } from 'react-router-dom';

const ProfileButtons = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link
        to="/edit-profile"
        className="btn btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-2"
      >
        <i className="fas fa-user-circle text-secondary mr-1" /> Edit Profile
      </Link>
      <Link
        to="/add-experience"
        className="btn btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-2"
      >
        <i className="fab fa-black-tie text-secondary mr-1" />
        Add Experience
      </Link>
      <Link
        to="/add-education"
        className="btn btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-4"
      >
        <i className="fas fa-graduation-cap text-secondary mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileButtons;
