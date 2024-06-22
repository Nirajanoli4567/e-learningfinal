import React, { useEffect, useState } from "react";
import { GetRequest, PostRequest } from "../../../../plugins/https"; // Adjust based on your actual HTTP handling setup
import { Button, Modal, Card } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddTransaction from "./AddTransaction";

const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");

  const getAllTransactions = async () => {
    try {
      const res = await GetRequest("/video");
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  // Function to add a new transaction
  const addTransaction = async (newTransaction) => {
    try {
      const res = await PostRequest("/video", newTransaction);
      setTransactions([...transactions, res.data]);
      close();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Function to handle opening video modal
  const handleOpenVideoModal = (videoUrl, videoTitle) => {
    setSelectedVideoUrl(videoUrl);
    setSelectedVideoTitle(videoTitle);
    setVideoModalOpen(true);
  };

  // Function to close video modal
  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideoUrl("");
    setSelectedVideoTitle("");
  };

  return (
    <div className="px-md pt-md">
      <div className="flex justify-between">
        <div>Video List</div>
        <Button color="green" onClick={open}>
          Add Video
        </Button>
      </div>
      {transactions.map((transaction, key) => (
        <Card key={key} className="mt-md" shadow="lg">
          <div className="flex justify-between items-center">
            <div>
              <p>{transaction.video}</p>
              <h3>{transaction.title}</h3>
            </div>
            <Button
              color="blue"
              onClick={() =>
                handleOpenVideoModal(transaction.video, transaction.title)
              }
              style={{ minWidth: "80px" }} // Adjust the minWidth as needed
            >
              Open
            </Button>
          </div>
        </Card>
      ))}

      <Modal opened={opened} onClose={close} title="Add Video">
        <AddTransaction close={close} addTransaction={addTransaction} />
      </Modal>

      {/* Video Modal */}
      <Modal
        opened={videoModalOpen}
        onClose={handleCloseVideoModal}
        title={selectedVideoTitle}
        size="xl"
      >
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${selectedVideoUrl}`}
          frameBorder="0"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      </Modal>
    </div>
  );
};

export default DashboardTransactions;
