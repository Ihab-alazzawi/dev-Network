import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentFeed = ({ auth, comments, postId }) => {
  return comments.map(comment => (
    <CommentItem
      key={comment._id}
      auth={auth}
      comment={comment}
      postId={postId}
    />
  ));
};

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

export default CommentFeed;
