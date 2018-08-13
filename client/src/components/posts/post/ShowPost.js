import React from 'react';
import PropTypes from 'prop-types';

const ShowPost = ({ post }) => {
  return (
    <div>
      <div className="card card-body rounded-0 mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              className="img-thumbnail rounded-0 border-white bg-dark d-none d-md-block"
              src={post.avatar}
              alt=""
            />
            <br />
            <p className="badge bg-white text-dark text-center">
              Author : {post.name}
            </p>
          </div>
          <div className="col-md-10">
            <p className="lead mb-4">
              <strong>{post.subject}</strong>
            </p>

            <p className="mb-5">
              {post.text}
              ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default ShowPost;
