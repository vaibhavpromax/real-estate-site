import "./button.scss";
const Button = ({ className = "", children, ...rest }) => {
  return (
    <div {...rest} className={`button ${className}`}>
      {children}
    </div>
  );
};

export default Button;
