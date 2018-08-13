import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputLinks = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text rounded-0">
          <i className={icon} />
        </span>
      </div>
      <input
        type={type}
        className={classnames('form-control form-control-lg rounded-0', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputLinks.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputLinks.defaultProps = {
  type: 'text'
};
export default InputLinks;
