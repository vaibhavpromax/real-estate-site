import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import "./signup.scss";

const Signup = () => {
  return (
    <div className="signup-page">
      <Input
        type="text"
        className="input"
        placeholder="Full Name"
        label="Enter Name"
      />
      <Input
        type="email"
        className="input"
        placeholder="Enter Email address"
        label="Enter Email"
      />
      <Input
        type="password"
        className="input"
        placeholder="Password"
        label="Enter Password"
      />
      <Input
        type="password"
        className="input"
        placeholder="Confirm Password"
        label="Confirm Password"
      />

      <Button className="button">Sign Up</Button>
      {/* <div className="button">Sign Up</div> */}
      <div>
        Already Signed In ? <Link to="/login"> Login Here</Link>
      </div>
    </div>
  );
};

export default Signup;
