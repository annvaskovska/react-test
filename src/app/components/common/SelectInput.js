import React, { PropTypes} from 'react';

const SelectInput = ({name, label, placeholder, onChange, options, defaultOption, value, errors}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}>
          <option value="">{defaultOption}</option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
          }
        </select>
        {errors & <div className="alert alert-danger">{errors}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.string
};

export default SelectInput;
