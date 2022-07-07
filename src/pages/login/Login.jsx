import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import "./login.scss";
import Button from "../../components/button/Button";
const Login = () => {
  return (
    <div className="login-page">
      <Input
        type="text"
        className="input"
        placeholder="Username"
        label="Enter Name"
      />
      <Input
        type="password"
        className="input"
        placeholder="Password"
        label="Enter Password"
      />
      <Button className="button">Login</Button>
      {/* <div className="button">Login</div> */}
      <div>
        Not signed Up ? <Link to="/signup"> Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;
