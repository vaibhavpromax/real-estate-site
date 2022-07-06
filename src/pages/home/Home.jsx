import "./home.scss";
import Homehouse from "../../assets/home-house.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={Homehouse} alt="" />
      <p>
        A golden chance to
        <br /> Live in your dream home
      </p>
    </div>
  );
};

export default Home;
