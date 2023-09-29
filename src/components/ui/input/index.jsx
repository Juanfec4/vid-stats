import "./styles.scss";

const Input = ({ placeholder, label, value, handleChange, name }) => {
  return (
    <span className="Input">
      {label ? (
        <label htmlFor={name} className="Input__label">
          {label}
        </label>
      ) : null}
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="Input__field"
      />
    </span>
  );
};

export default Input;
