import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./houseInfo.scss";
import Input from "../../components/input/Input";

const HouseInfo = () => {
  return (
    <div className="houseInfo">
      <div className="house-info-wrapper">
        <img
          src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="name-price">
          <div className="name">Ameero Wala Ghar</div>
          <div className="price">₹40Lakh</div>
        </div>
        <div className="about">
          <h3>Property Overview:</h3>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vel
            corporis laboriosam accusantium sed voluptas ab suscipit sit ipsam
            velit esse, dicta amet rerum porro architecto dolor, ullam tempore
            pariatur odit quae eos eveniet. Quisquam velit consequuntur modi
            inventore suscipit!
          </div>
        </div>
        <div className="location">
          <LocationOnIcon className="icon" /> 9/9, Sector-9, Chandigarh, India"
        </div>
        <div className="features">
          <h3>Property Features:</h3>
          <div className="amenities">
            <div className="wrapper">
              <HotelIcon className="icon" />4 rooms
            </div>
            <div className="wrapper">
              <BathtubIcon className="icon" />3 bath
            </div>
            <div className="wrapper">
              <StraightenIcon className="icon" />
              6969 sq ft
            </div>
            <div className="wrapper">
              <CalendarMonthIcon className="icon" />
              2010
            </div>
          </div>
        </div>
      </div>

      <div className="agent-contact">
        <div className="agent-info">
          <img
            src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="contact-info">
            <div className="name">Walter White</div>
            <div className="phone">++696969969</div>{" "}
          </div>
        </div>
        <div className="contact-form">
          <Input
            type="text"
            placeholder="Full Name"
            label="Enter Your Name"
            className="input"
          />
          <Input
            type="number"
            placeholder="Phone No."
            className="input"
            label="Enter Your Phone number"
          />
          <Input
            type="email"
            placeholder="Email address"
            className="input"
            label="Enter Your E-mail Address"
          />
          <Input
            type="text"
            className="input"
            placeholder="Enter here"
            label="Enter Your Query"
          />
          <div className="button">Submit</div>
        </div>
      </div>
    </div>
  );
};

export default HouseInfo;
