import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Register from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import TransactionsPage from "./components/TransactionsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import WalletLayout from "./components/WalletLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<WalletLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
