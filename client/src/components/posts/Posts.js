import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }
  componentDidMount() {
    this.props.getPosts();
  }

  handleShowForm(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map(post => {
        return <PostItem key={post._id} post={post} />;
      });
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col md-12 text-right">
              <button
                className="btn btn-light rounded-0 border-bottom border-dark border-right-0 border-left-0 border-top-0 mb-2 mt-2"
                onClick={this.handleShowForm.bind(this)}
              >
                <i className="fas fa-plus" /> Add Post
              </button>
            </div>
            <div className="animated  fadeIn col-md-12">
              {this.state.showForm ? <PostForm /> : null}
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
