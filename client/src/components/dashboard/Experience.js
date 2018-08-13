import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  deleteHandle(id) {
    this.props.deleteExperience(id);
  }
  render() {
    const experience = this.props.experienceArray.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{' '}
          {exp.to === null ? (
            ' Current'
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.deleteHandle.bind(this, exp._id)}
            className="btn btn-danger bg-white text-danger border-left-0 border-right-0 border-top-0 border-danger rounded-0"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience</h4>
        <table className="table table-bordered">
          <thead>
            <tr className="text-center">
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th>{'</>'}</th>
            </tr>
          </thead>
          <tbody className="text-center">{experience}</tbody>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
