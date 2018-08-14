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
        <div className="card card-body rounded-0 mb-3">
          <div className="row">
            <div className="col-2 text-center">
              <img
                className="img-thumbnail rounded-0 border-white bg-dark"
                src={post.avatar}
                alt=""
              />
              <p className="badge bg-white text-center">
                Author: {post.name.trim().split(' ')[0]}
              </p>
            </div>
            <div className="col-md-10">
              <strong>
                <h5 className="mb-4 font-weight-bold">
                  {post.subject.substring(0, 50)}
                  ...
                </h5>
              </strong>
              <p className="text-justify">
                {post.text.substring(0, 100)}
                .....
                <Link className="text-dark text-md" to={`posts/${post._id}`}>
                  <span className="mb-4">read more</span>
                </Link>
              </p>

              <span>
                <button
                  onClick={this.handleLike.bind(this, post._id)}
                  type="button"
                  className="btn bg-white mr-1"
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
                  className="btn bg-white mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link
                  to={`posts/${post._id}`}
                  className="btn bg-white text-dark rounded-0 border-dark mr-1 mb-2"
                >
                  {post.comments.length} Comments
                </Link>
                <div className="row">
                  <div className="col-md-10">
                    {post.user === auth.user.id ? (
                      <span>
                        <button
                          onClick={this.handleDelete.bind(this, post._id)}
                          type="button"
                          className="btn btn-danger bg-white rounded-0 text-danger float-right"
                        >
                          <i className="fas fa-times" />
                        </button>
                        <button
                          onClick={this.handleEdit.bind(this, post._id)}
                          type="button"
                          className="btn btn-light rounded-0 border-bottom border-dark border-right-0 border-left-0 border-top-0 float-right mr-1"
                        >
                          Edit
                        </button>
                      </span>
                    ) : null}
                  </div>
                </div>
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
