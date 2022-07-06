import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="name">
            <HomeIcon />
            ESTATE
          </div>
        </Link>
        <Link to="/rent" style={{ textDecoration: "none" }}>
          <div className="tabs">Rent</div>
        </Link>
        <Link to="/buy" style={{ textDecoration: "none" }}>
          <div className="tabs">Buy</div>
        </Link>
        {/* <Link to="/rent" style={{ textDecoration: "none" }}>
          <div className="tabs">Rent</div>
        </Link> */}
        <Link to="/sell" style={{ textDecoration: "none" }}>
          <div className="tabs">Sell</div>
        </Link>
      </div>
      <div className="right">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="login">Login</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <div className="signup">Sign Up</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
