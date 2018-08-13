import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextArea from '../common/TextArea';
import { addPost } from '../../actions/postActions';
import Inputs from '../common/Inputs';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      subject: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;
    const newPost = {
      subject: this.state.subject,
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '', subject: '', errors: {} });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="animated  fadeIn post-form mb-3">
        <div className="card card-secondary rounded-0">
          <div className="card-header bg-white rounded-0 text-dark">
            Say Something...
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <Inputs
                  placeholder="Subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  error={errors.subject}
                />
                <TextArea
                  placeholder="Create apost"
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  error={errors.text}
                />
              </div>
              <button
                type="submit"
                className="btn btn-light rounded-0 border-bottom border-dark border-right-0 border-left-0 border-top-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
