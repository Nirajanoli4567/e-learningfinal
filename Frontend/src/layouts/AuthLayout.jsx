import { Route, Routes } from "react-router";
import { Login } from "../pages/auth/Login";
import { Navbar } from "../components/partials/Navbar";
import Signup from "../pages/auth/Signup";

export const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<div>404 Not found</div>} />
      </Routes>
    </>
  );
};
