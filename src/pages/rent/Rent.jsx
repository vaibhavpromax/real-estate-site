import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import "./rent.scss";

const Rent = () => {
  return (
    <div className="rent">
      <Filter />
      <div className="houseCards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Rent;
