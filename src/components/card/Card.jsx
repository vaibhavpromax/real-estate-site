import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./card.scss";
const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/2422401/pexels-photo-2422401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="price">₹40 lakh</div>
      </div>
      <div className="description">
        <div className="name">Ameero Wala Ghar</div>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          excepturi voluptatibus quidem perferendis porro aut dolorum!
        </div>
        <div className="location">
          <LocationOnIcon className="icon" /> 9/9, Sector-9, Chandigarh, India
        </div>
        <div className="other-info">
          <div className="wrapper">
            <HotelIcon className="icon" />4 Bed
          </div>
          <div className="line"></div>
          <div className="wrapper">
            <BathtubIcon className="icon" />3 Bath
          </div>
          <div className="line"></div>

          <div className="wrapper">
            <StraightenIcon className="icon" />
            6969 Sq ft
          </div>

          <div className="line"></div>
          <div className="wrapper">
            <CalendarMonthIcon className="icon" />
            2015
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
