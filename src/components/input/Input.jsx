import "./input.scss";

const Input = (props) => {
  return (
    <div className={`input ${props.className}`}>
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
