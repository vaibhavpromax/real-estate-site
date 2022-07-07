import "./input.scss";

const Input = ({ className = "", label, type, placeholder, ...rest }) => {
  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
