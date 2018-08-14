import React from 'react';
import PropTypes from 'prop-types';

const ShowPost = ({ post }) => {
  return (
    <div>
      <div className="card card-body rounded-0 mb-3">
        <div className="row">
          <div className="col-2">
            <img
              className="img-thumbnail rounded-0 border-white bg-dark"
              src={post.avatar.trim().split(' ')[0]}
              alt=""
            />
            <br />
            <p className="badge bg-white text-dark text-center">
              Author : {post.name}
            </p>
          </div>
          <div className="col-md-10">
            <h5 className="mb-4 font-weight-bold">
              <strong>{post.subject}</strong>
            </h5>

            <p className="mb-5 text-justify">
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
