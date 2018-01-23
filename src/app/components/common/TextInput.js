const SelectInput = ({name, label, placeholder, onChange, value, error}) => {
  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-1 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
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
