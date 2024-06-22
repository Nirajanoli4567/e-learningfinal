import { IconCalendar } from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="h-full relative dashboard-sidebar flex flex-col mt-lg  bg-white ">
      <div className="logo absolute top-none flex justify-center items-center w-full">
        <a href="/dashboard/home" className="decoration-0">
          {" "}
          E-learning
        </a>
      </div>
      <div className="flex flex-col flex-grow justify-start items-center mt-2xl">
        <div style={{ marginBottom: "10px" }}>
          <NavLink
            to="/dashboard/home"
            className="p-sm flex items-center justify-center"
          >
            <IconCalendar />
          </NavLink>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <NavLink
            to="/dashboard/transactions"
            className="p-sm flex items-center justify-center"
          >
            <IconCalendar />
          </NavLink>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <NavLink
            to="/dashboard/account"
            className="p-sm flex items-center justify-center"
          >
            <IconCalendar />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
