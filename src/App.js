import { useState } from "react";
import { Route, Routes, Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { FiUser, FiHeart } from "react-icons/fi";
import { PiBasket } from "react-icons/pi";

import './App.css';
import Register from "./components/register";

function App() {

  const [user, setUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [errMessage, setErrMessage] = useState({});

  const loginHandle = () => {
    
  }
  
  return (
    <Routes>
      <Route path="/" />
      <Route path="register" element={<Register />} />
    </Routes>
    // <div className="App">
    //   <div className="nav">
    //       <h3>Anasayfa</h3>
    //       <h3>Sana Özel</h3>
    //       <h3>Beğenebileceklerin</h3>
    //     <button onClick={loginHandle}  className="btn-1">
    //       <FiUser />
    //     </button>
    //       <PiBasket />
    //       <FiHeart />
    //   </div>
    // </div>
  );
}

export default App;