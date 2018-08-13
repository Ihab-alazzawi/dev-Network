import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getPost } from '../../../actions/postActions';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import ShowPost from './ShowPost';

export class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    const { auth } = this.props;
    let postContent;
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <ShowPost post={post} auth={auth} />
          <CommentForm postId={post._id} />
          <CommentFeed auth={auth} comments={post.comments} postId={post._id} />
        </div>
      );
    }
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="animated  fadeIn col-md-12">
              <Link
                to="/posts"
                className="btn btn-light rounded-0 border-bottom border-dark border-right-0 border-left-0 border-top-0 mb-3"
              >
                Back To Posts
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
