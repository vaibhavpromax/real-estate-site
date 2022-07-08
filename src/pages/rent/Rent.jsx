import { useContext } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { HouseContext } from "../../HouseContext";
import FmdBadIcon from "@mui/icons-material/FmdBad";

import "./rent.scss";
import Navbar from "../../components/navbar/Navbar";

const Rent = () => {
  const { houses } = useContext(HouseContext);
  if (houses.length === 0) {
    return (
      <>
      <Navbar/>
        <div className="wrapper">
          <Filter />
          <div className="not-found">
            <FmdBadIcon />
            <h1>Sorry, not found</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="rent">
      <Navbar/>
      <Filter />
      <div className="houseCards">
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Rent;
