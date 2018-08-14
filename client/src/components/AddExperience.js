import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Inputs from '../components/common/Inputs';
import TextArea from '../components/common/TextArea';
import { addExperience } from '../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState(() => ({
        errors: nextProps.errors
      }));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheck() {
    this.setState(prevState => {
      return {
        disabled: !prevState.disabled,
        current: !prevState.current
      };
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="animated  fadeIn col-md-8 m-auto">
              <Link
                to="/dashboard"
                className="btn btn-light mb-3 float-left rounded-0 border-right-0 border-left-0 border-top-0 border-dark"
              >
                Go Back
              </Link>
              <br />
              <br />
              <h1 className="display-5 text-center pt-2">Add Experience</h1>
              <p className="lead text-center">
                Add any job or position that you have had in the past
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.handleSubmit}>
                <Inputs
                  placeholder="* Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleChange}
                  error={errors.company}
                />
                <Inputs
                  placeholder="Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  error={errors.title}
                />
                <Inputs
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  error={errors.location}
                />
                <h6>From Date</h6>
                <Inputs
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.handleChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <Inputs
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.handleChange}
                  error={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.handleCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextArea
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  error={errors.description}
                  info="Tell us about the position"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-light bg-white border-left-0 border-right-0 border-top-0 border-dark rounded-0  btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
