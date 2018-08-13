import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/authActions';
import Inputs from '../common/Inputs';
import axios from 'axios';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      avatar: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await axios
      .get(`https://api.github.com/users/${this.state.avatar}`)
      .then(res =>
        this.setState({
          avatar: res.data.avatar_url
        })
      )
      .catch(err =>
        this.setState({
          avatar: ''
        })
      );
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signUpUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="animated fadeIn col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center text-secondary">
                Create your DevNetwork account
              </p>
              <form noValidate onSubmit={this.handleSubmit}>
                <Inputs
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  error={errors.name}
                />
                <Inputs
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  error={errors.email}
                />
                <Inputs
                  type="text"
                  placeholder="GitHub Username"
                  name="avatar"
                  value={this.state.avatar}
                  onChange={this.handleChange}
                  error={errors.avatar}
                  info="This site uses GitHub API so if you want a profile image, use your actual GitHub username "
                />

                <Inputs
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  error={errors.password}
                />

                <Inputs
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleChange}
                  error={errors.password2}
                />
                <input
                  type="submit"
                  className="btn btn-lg btn-light rounded-0 bg-white border-left-0 border-right-0 border-top-0 border-dark btn-block"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signUpUser }
)(withRouter(Signup));
