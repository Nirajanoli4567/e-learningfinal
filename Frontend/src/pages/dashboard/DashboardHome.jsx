import React from "react";
import { Card, Badge } from "@mantine/core"; // Assuming you're using Mantine for styling

const DashboardHome = () => {
  // Example data (replace with actual data fetched from backend)
  const studentsCount = 120;
  const adminsCount = 5;
  const awardsCount = 15;

  return (
    <div className="dashboardhome m-xl text-center">
      <h1 className="text-4xl mb-xl">Dashboard Home</h1>
      <div className="row justify-center">
        <div className="col-md-4 mb-md d-flex justify-center align-center">
          <Card
            shadow="lg"
            padding="lg"
            radius="md"
            withBorder
            style={{
              height: "200px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Section>
              <h2 className="text-lg">Students</h2>
              <Badge color="teal">{studentsCount}</Badge>
            </Card.Section>
          </Card>
        </div>
        <div className="col-md-4 mb-md d-flex justify-center align-center">
          <Card
            shadow="lg"
            radius="md"
            withBorder
            style={{
              height: "200px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Section>
              <h2 className="text-lg">Admins</h2>
              <Badge color="indigo">{adminsCount}</Badge>
            </Card.Section>
          </Card>
        </div>
        <div className="col-md-4 mb-md d-flex justify-center align-center">
          <Card
            shadow="lg"
            radius="md"
            withBorder
            style={{
              height: "200px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card.Section>
              <h2 className="text-lg">Awards</h2>
              <Badge color="purple">{awardsCount}</Badge>
            </Card.Section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
