import { Navigate, Route, Routes } from "react-router";
import { Login } from "../pages/auth/Login";
import { TodoLanding } from "../pages/Todo/TodoLanding";
import { getTokenFromLocalStorage } from "../utils/localstorage.helper";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/modules/auth/action";
import { DialogDisplayScreen } from "../pages/Todo/DialogDisplayScreen";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const AppRoutes = () => {
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
    <Routes>
      <Route
        path=""
        element={token == "" ? <Login /> : <Navigate to="/home" />}
      />
      <Route
        path="/home"
        element={!token == "" ? <TodoLanding /> : <Navigate to="/" />}
      />
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      {/* element={token !== "" ? <DashboardLayout /> : <Navigate to="/" />} */}

      <Route path="/products/:id" element={<DialogDisplayScreen />} />
    </Routes>
  );
};
