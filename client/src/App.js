import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login.jsx";
import ShoutsPage from "./pages/ShoutsPage";
import ProfilePage from "./pages/ProfilePage";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="route-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/shouts" element={<ShoutsPage></ShoutsPage>} />
            <Route path="/profile" element={<ProfilePage></ProfilePage>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
