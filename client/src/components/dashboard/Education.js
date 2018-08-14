import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  deleteEducation,
  showModal,
  hideModal
} from '../../actions/profileActions';
import Modal from '../common/Modal';

class Education extends Component {
  constructor(props) {
    super(props);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.openModalHandle = this.openModalHandle.bind(this);
    this.closeModalHandle = this.closeModalHandle.bind(this);
  }
  deleteHandle(id) {
    this.props.deleteEducation(id);
  }

  openModalHandle() {
    this.props.showModal();
  }

  closeModalHandle() {
    this.props.hideModal();
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
          <Modal
            deleteHandle={this.deleteHandle}
            openModalHandle={this.openModalHandle}
            closeModalHandle={this.closeModalHandle}
            modalButton="Delete"
          />
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
  { deleteEducation, showModal, hideModal }
)(Education);
