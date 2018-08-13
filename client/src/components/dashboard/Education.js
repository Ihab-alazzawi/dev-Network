import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  deleteHandle(id) {
    this.props.deleteEducation(id);
  }
  render() {
    const education = this.props.educationArray.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{' '}
          {edu.to === null ? (
            ' Current'
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.deleteHandle.bind(this, edu._id)}
            className="btn btn-danger bg-white text-danger border-left-0 border-right-0 border-top-0 border-danger rounded-0"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education</h4>
        <table className="table table-bordered">
          <thead className="text-center">
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th>{'</>'}</th>
            </tr>
          </thead>
          <tbody className="text-center">{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
