import React, {PropTypes} from 'react';

const SelectInput = ({name, label, placeholder, onChange, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length) {
    wrapperClass += " has-errors";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          name={name}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error & <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
