import { useState } from "react";
import { Route, Routes, Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { FiUser, FiHeart } from "react-icons/fi";
import { PiBasket } from "react-icons/pi";

import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {

  const [user, setUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [errMessage, setErrMessage] = useState({});
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;