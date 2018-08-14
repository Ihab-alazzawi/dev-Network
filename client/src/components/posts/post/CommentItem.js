import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/postActions';
import { showModal, hideModal } from '../../../actions/profileActions';
import Modal from '../../common/Modal';

class CommentItem extends Component {
  constructor(props) {
    super(props);

    this.openModalHandle = this.openModalHandle.bind(this);
    this.closeModalHandle = this.closeModalHandle.bind(this);
  }

  openModalHandle() {
    this.props.showModal();
  }

  closeModalHandle() {
    this.props.hideModal();
  }

  deleteHandle(postId, commentId) {
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
            <div className="row justify-content-end">
              <div className="col text-right">
                {comment.user === auth.user.id ? (
                  <Modal
                    deleteHandle={this.deleteHandle.bind(
                      this,
                      postId,
                      comment._id
                    )}
                    openModalHandle={this.openModalHandle}
                    closeModalHandle={this.closeModalHandle}
                    modalButton="X"
                  />
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
  { deleteComment, showModal, hideModal }
)(CommentItem);
