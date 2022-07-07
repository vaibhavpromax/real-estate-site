import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import "./card.scss";
const Card = ({ house }) => {
  return (
    <div className="card">
      <Link
        to={`/${house.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="image">
          <img src={house.image} alt="" />
          <div className="price">₹ {house.price}</div>
        </div>
        <div className="description">
          <div className="name">{house.name}</div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            excepturi voluptatibus quidem perferendis porro aut dolorum!
          </div>
          <div className="location">
            <LocationOnIcon className="icon" />
            {house.country}
          </div>
          <div className="other-info">
            <div className="wrapper">
              <HotelIcon className="icon" />
              {house.bedrooms} Beds
            </div>
            <div className="line"></div>
            <div className="wrapper">
              <BathtubIcon className="icon" />
              {house.bathrooms} Bath
            </div>
            <div className="line"></div>

            <div className="wrapper">
              <StraightenIcon className="icon" />
              {house.surface} Sq ft
            </div>

            <div className="line"></div>
            <div className="wrapper">
              <CalendarMonthIcon className="icon" />
              {house.year}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
