import { useState } from "react";
import "./App.css";
import "./assets/css/vars.css";
import "./assets/css/theme.css";
// import "./assets/css/layout.css";
import "./assets/css/style.css";
import { WelcomeLayout } from "./layouts/WelcomeLayout";
import { Login } from "./pages/auth/Login";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/partials/Navbar";
import { Navigate, Route, Routes } from "react-router";
import { AuthLayout } from "./layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLocalStorage } from "./utils/localstorage.helper";
import { setToken } from "./store/modules/auth/action";
import { DashboardLayout } from "./layouts/DashboardLayout";

function App() {
  const token =
    useSelector((state) => state.tokenReducer.token) ??
    getTokenFromLocalStorage();
  console.log("Token is ", token);
  const dispatch = useDispatch();
  // const isLoggedIn = getTokenFromLocalStorage();

  // if (isLoggedIn) {
  //   dispatch(setToken(isLoggedIn));
  // }

  return (
    <>
      <Routes>
        <Route path="/*" element={<WelcomeLayout />} />
        <Route
          path="/auth/*"
          element={!token || token == "" ? <AuthLayout /> : <Navigate to="/" />}
        />
        {/* <Route path="/dashboard/*" element={<DashboardLayout />} /> */}
        <Route
          path="/dashboard/*"
          element={
            ![null, undefined, ""].includes(token) ? (
              <DashboardLayout />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/login"
          element={
            token && token !== "" ? <Navigate to="/dashboard" /> : <Login />
          }
        ></Route>
      </Routes>

      {/* <AppRoutes /> */}
    </>
  );
}

export default App;
