import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sell from "./pages/sell/Sell";
import Navbar from "./components/navbar/Navbar";
import Rent from "./pages/rent/Rent";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import HouseInfo from "./pages/houseInfo/HouseInfo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/buy" element={<Rent />} />
        <Route path="/rent" element={<Rent />} />
        <Route path=":houseId" element={<HouseInfo />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
