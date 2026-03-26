import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
//import "./App.css";
import LoginPage from "./components/LoginPage";
import Register from "./components/RegisterPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


