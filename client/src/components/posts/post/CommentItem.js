import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/postActions';

class CommentItem extends Component {
  handleDelete(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2 text-center">
            <img
              className="img-thumbnail rounded-0 border-white bg-dark d-none d-md-block"
              src={comment.avatar}
              alt=""
            />
            <br />
            <p className="badge bg-white">{comment.name}</p>
          </div>
          <div className="col-md-10">
            <span className="card-text text-justify align-middle">
              {comment.text}
            </span>
            <div className="row">
              <div className="col align-bottom">
                {comment.user === auth.user.id ? (
                  <button
                    onClick={this.handleDelete.bind(this, postId, comment._id)}
                    type="button"
                    className="btn btn-danger bg-white rounded-0 text-danger float-right"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteComment }
)(CommentItem);
