import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  handleDelete(id) {
    this.props.deletePost(id);
  }

  handleEdit(id) {
    this.props.history.push(`/posts/${id}/edit`);
  }

  handleLike(id) {
    this.props.addLike(id);
  }

  handleUnLike(id) {
    this.props.removeLike(id);
  }

  handleUserLikes(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div>
        <div className="shadow-sm card card-body mb-3">
          <div className="row">
            <div className="col-md-2 text-center">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
              <br />
              <p className="badge badge-dark text-center">
                Author: '{post.name}'
              </p>
            </div>
            <div className="col-md-10">
              <Link className="text-dark" to={`posts/${post._id}`}>
                <h4 className="mb-4">
                  <strong>{post.subject.substring(0, 50)}</strong>
                </h4>
              </Link>

              <p className="lead mb-5">{post.text.substring(0, 100)}...</p>
              <span>
                <button
                  onClick={this.handleLike.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up text-secondary', {
                      'text-dark': this.handleUserLikes(post.likes)
                    })}
                  />
                  <span className="badge badge-light">{post.likes.length}</span>
                </button>
                <button
                  onClick={this.handleUnLike.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link
                  to={`posts/${post._id}`}
                  className="btn btn-dark mr-1 mb-2"
                >
                  {post.comments.length} Comments
                </Link>
                {post.user === auth.user.id ? (
                  <span>
                    <button
                      onClick={this.handleDelete.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger float-right"
                    >
                      <i className="fas fa-times" />
                    </button>
                    <button
                      onClick={this.handleEdit.bind(this, post._id)}
                      type="button"
                      className="btn btn-secondary mr-2 float-right"
                    >
                      Edit
                    </button>
                  </span>
                ) : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(withRouter(PostItem));
