import "./home.scss";
import Homehouse from "../../assets/home-house.jpg";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <img src={Homehouse} alt="" />
      <p>
        A golden chance to
        <br /> Live in your dream home
      </p>
    </div>
  );
};

export default Home;
