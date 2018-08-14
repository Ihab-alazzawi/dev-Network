import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  deleteExperience,
  showModal,
  hideModal
} from '../../actions/profileActions';
import Modal from '../common/Modal';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.openModalHandle = this.openModalHandle.bind(this);
    this.closeModalHandle = this.closeModalHandle.bind(this);
  }

  openModalHandle() {
    this.props.showModal();
  }

  closeModalHandle() {
    this.props.hideModal();
  }
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
  { deleteExperience, showModal, hideModal }
)(Experience);
