import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "./houseInfo.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { housesData } from "../../data";
import Navbar from "../../components/navbar/Navbar";
const HouseInfo = () => {
  let { houseId } = useParams();
  console.log(typeof houseId);

  let house = housesData.find((house) => house.id.toString() === houseId);
  console.log(house);
  return (
    <>
      <Navbar />
      <div className="houseInfo">
        <div className="house-info-wrapper">
          <img src={house.imageLg} alt="" />
          <div className="name-price">
            <div className="name">{house.name}</div>
            <div className="price">₹ {house.price}</div>
          </div>
          <div className="about">
            <h3>Property Overview:</h3>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              vel corporis laboriosam accusantium sed voluptas ab suscipit sit
              ipsam velit esse, dicta amet rerum porro architecto dolor, ullam
              tempore pariatur odit quae eos eveniet. Quisquam velit
              consequuntur modi inventore suscipit!
            </div>
          </div>
          <div className="location">
            <LocationOnIcon className="icon" />
            {house.address} , {house.country}
          </div>
          <div className="features">
            <h3>Property Features:</h3>
            <div className="amenities">
              <div className="wrapper">
                <HotelIcon className="icon" />
                {house.bedrooms} rooms
              </div>
              <div className="wrapper">
                <BathtubIcon className="icon" />
                {house.bathrooms} bath
              </div>
              <div className="wrapper">
                <StraightenIcon className="icon" />
                {house.surface} sq ft
              </div>
              <div className="wrapper">
                <CalendarMonthIcon className="icon" />
                {house.year}
              </div>
            </div>
          </div>
        </div>

        <div className="agent-contact">
          <div className="agent-info">
            <img src={house.agent.image} alt="" />
            <div className="contact-info">
              <div className="name">{house.agent.name}</div>
              <div className="phone">+{house.agent.phone}</div>{" "}
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
            <Button className="button">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseInfo;
