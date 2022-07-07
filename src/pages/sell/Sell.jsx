import Input from "../../components/input/Input";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import "./sell.scss";
import { useState } from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
const Sell = () => {
  const [houseImage, setHouseImage] = useState("");

  return (
    <>
      <Navbar />
      <div className="sell">
        <img
          src={
            houseImage
              ? URL.createObjectURL(houseImage)
              : "https://www.fairpriceautoparts.com/assets/images/no-image.png"
          }
          className="image"
          alt=""
        />

        <div className="sell-form">
          <label htmlFor="houseImage" className="file-upload">
            Image
            <DriveFolderUploadOutlinedIcon className="icon" />
          </label>
          <input
            type="file"
            id="houseImage"
            onChange={(e) => {
              setHouseImage(e.target.files[0]);
            }}
            style={{ display: "none" }}
          />
          <div className="form-wrapper">
            <Input
              type="text"
              label="Enter Property Name"
              placeholder="Enter Property Name"
              className="input"
            />
            <div className="select">
              <label>Type:</label>
              <select>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
            </div>
            <Input
              type="text"
              label="Country"
              placeholder="USA"
              className="input"
            />
            <Input
              type="text"
              label="Enter Complete Address"
              placeholder="Enter Address here"
              className="input"
            />
            <Input
              type="number"
              label="Enter Area in `Sq.ft`"
              placeholder="0000"
              className="input"
            />
            <Input
              type="number"
              label="Enter Number of Bedrooms"
              placeholder="4"
              className="input"
            />
            <Input
              type="number"
              label="Enter Number of Bathrooms"
              placeholder="2"
              className="input"
            />
            <Input
              type="number"
              label="Enter Build Year"
              placeholder="2015"
              className="input"
            />
            <Input
              type="number"
              label="Enter Price in Dollars"
              placeholder="20000"
              className="input"
            />
          </div>

          <Button className="button">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Sell;
