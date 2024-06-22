import { Route, Routes } from "react-router";
import { Login } from "../pages/auth/Login";
import { Navbar } from "../components/partials/Navbar";
import Signup from "../pages/auth/Signup";
import DashboardNavbar from "../components/partials/DashboardNavbar";
import { Box } from "@mantine/core";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardTransactions from "../components/modules/dashboard/transactions/DashboardTransactions";
import Transactions from "../pages/dashboard/Transactions";

export const DashboardLayout = () => {
  return (
    <>
      <Box className="flex  h-screen">
        {/* Sidebar */}
        <Box className="border-r border-gray-400 w-4xl ">
          <DashboardSidebar />
        </Box>

        {/* Content */}
        <Box className=" w-full">
          <DashboardNavbar />
          <Routes>
            <Route path="/home" element={<DashboardHome />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<div>Inside Accounts</div>} />

            <Route path="/*" element={<div>404 Not found</div>} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};
