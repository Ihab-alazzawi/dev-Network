import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../../actions/postActions';

class PostItem extends Component {
  handleDelete(id) {
    this.props.deletePost(id);
  }
  handleEdit(id) {
    this.props.history.push(`/posts/${id}/edit`);
  }
  render() {
    const { post, auth } = this.props;
    return (
      <div>
        <div className="card card-body mb-3">
          <div className="row">
            <div className="col-md-2">
              <a href="profile.html">
                <img
                  className="rounded-circle d-none d-md-block"
                  src={post.avatar}
                  alt=""
                />
              </a>
              <br />
              <p className="text-center text-info">{post.name}</p>
            </div>
            <div className="col-md-10">
              <h4 className="mb-4">{post.subject}</h4>
              <p className="lead">{post.text}</p>
              <button type="button" className="btn btn-light mr-1">
                <i className="text-info fas fa-thumbs-up" />
                <span className="badge badge-light">4</span>
              </button>
              <button type="button" className="btn btn-light mr-1">
                <i className="text-secondary fas fa-thumbs-down" />
              </button>
              <a href="post.html" className="btn btn-info mr-1">
                Comments
              </a>
              {post.user === auth.user.id ? (
                <div>
                  <button
                    onClick={this.handleEdit.bind(this, post._id)}
                    type="button"
                    className="btn btn-light mr-1 mt-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={this.handleDelete.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1 mt-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getPost, deletePost }
)(withRouter(PostItem));
