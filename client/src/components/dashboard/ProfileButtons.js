import React from 'react';
import { Link } from 'react-router-dom';

const ProfileButtons = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link
        to="/edit-profile"
        className="btn btn-sm btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-2"
      >
        <i className="fas fa-edit text-secondary mr-1" /> Profile
      </Link>
      <Link
        to="/add-experience"
        className="btn btn-sm btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-2"
      >
        <i className="fas fa-plus text-secondary mr-1" />
        Experience
      </Link>
      <Link
        to="/add-education"
        className="btn btn-sm btn-light bg-light border-left-0 border-right-0 border-top-0 border-dark rounded-0 mr-4"
      >
        <i className="fas fa-plus text-secondary mr-1" />
        Education
      </Link>
    </div>
  );
};

export default ProfileButtons;
