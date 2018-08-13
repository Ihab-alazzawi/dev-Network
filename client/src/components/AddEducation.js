import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Inputs from '../components/common/Inputs';
import TextArea from '../components/common/TextArea';
import { addEducation } from '../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
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
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
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
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="animated  fadeIn col-md-8 m-auto">
              <Link
                to="/dashboard"
                className="btn btn-light mb-3 float-left rounded-0 border-right-0 border-left-0 border-top-0 border-dark"
              >
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp, etc that you have attended
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.handleSubmit}>
                <Inputs
                  placeholder="* School"
                  name="school"
                  value={this.state.school}
                  onChange={this.handleChange}
                  error={errors.school}
                />
                <Inputs
                  placeholder="* Degree or Certification"
                  name="degree"
                  value={this.state.degree}
                  onChange={this.handleChange}
                  error={errors.degree}
                />
                <Inputs
                  placeholder="* Field Of Study"
                  name="fieldofstudy"
                  value={this.state.fieldofstudy}
                  onChange={this.handleChange}
                  error={errors.fieldofstudy}
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
                    Current
                  </label>
                </div>
                <TextArea
                  placeholder="Program Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  error={errors.description}
                  info="Tell us about the program that you where in"
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

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
