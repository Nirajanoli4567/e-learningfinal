import { IconCalendar } from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="h-full relative dashboard-sidebar">
      <div className="logo absolute top-none flex justify-center items-center w-full">
        Expense
      </div>
      <div className=" h-full flex flex-col justify-center gap-xs items-center">
        <NavLink to="/dashboard/home" className={`p-sm`}>
          <IconCalendar />
        </NavLink>

        <NavLink to="/dashboard/transactions" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/account" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/calendar" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/stats" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/stats" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/stats" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/stats" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
        <NavLink to="/dashboard/stats" className={` p-sm`}>
          <IconCalendar />
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
