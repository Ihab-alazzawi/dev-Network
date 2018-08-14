import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  deleteHandle,
  openModalHandle,
  closeModalHandle,
  modalTitle,
  modalBody,
  modalButton
}) => (
  <span>
    <button
      onClick={openModalHandle}
      className="btn btn-danger bg-white text-danger border-left-0 border-right-0 border-top-0 border-danger rounded-0"
      data-toggle="modal"
      data-target="#deleteAccount"
    >
      {modalButton}
    </button>
    <div
      className="modal fade pt-5 mt-5"
      id="deleteAccount"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="deleteAccountModal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteAccountModal">
              {modalTitle}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <p className="text-dark">{modalBody}</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModalHandle}
              type="button"
              className="btn bg-white text-dark border-left-0 border-right-0 border-top-0 border-dark rounded-0"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              onClick={deleteHandle}
              type="button"
              className="btn btn-danger bg-white text-danger border-left-0 border-right-0 border-top-0 border-danger rounded-0"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </span>
);

Modal.propTypes = {
  deleteHandle: PropTypes.func.isRequired,
  openModalHandle: PropTypes.func.isRequired,
  closeModalHandle: PropTypes.func.isRequired
};

Modal.defaultProps = {
  modalTitle: 'Are you sure ?',
  modalBody: ' This action CANNOT be undone.'
};

export default Modal;
