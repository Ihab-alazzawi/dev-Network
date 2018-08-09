import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page dose not exist</p>
      <Link to="/" className="btn btn-dark">
        Return to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
