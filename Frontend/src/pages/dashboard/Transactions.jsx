import React, { useState, useEffect } from "react";
import DashboardTransactions from "../../components/modules/dashboard/transactions/DashboardTransactions";
import axios from "axios";

const Transactions = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get("http://localhost:8080/video/");
        console.log("Response:", res); // Log the full response object
        setVideo(res.data); // Assuming res.data is the array you expect
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div>
      <DashboardTransactions transactions={video} />{" "}
    </div>
  );
};

export default Transactions;
