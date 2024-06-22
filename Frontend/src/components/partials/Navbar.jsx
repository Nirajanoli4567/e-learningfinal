import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth.helper";

export const Navbar = () => {
  const counter = useSelector((state) => state.countReducer.count);
  const token = useSelector((state) => state.tokenReducer.token);

  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Features", to: "/features" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <nav className="flex justify-between left-none top-none fixed w-full items-center bg-white z-10">
      <div className="logo text-lg text-start bold">logo</div>
      <div className="nav-items flex items-center">
        {navItems.map((v, key) => (
          <NavLink to={v.to} className="nav-item px-sm py-md" key={key}>
            {v.label}
          </NavLink>
        ))}

        {token && token !== "" ? (
          <>
            <Button variant="outline" color="orange" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              color="orange"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Login
            </Button>{" "}
            <Button
              variant="outline"
              color="orange"
              onClick={() => {
                navigate("/auth/signup");
              }}
            >
              Signup
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};
