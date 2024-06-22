import React, { useEffect, useState } from "react";
import { GetRequest } from "../../../../plugins/https";
import { Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddTransaction from "./AddTransaction";

const DashboardTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  const getAllTransactions = async () => {
    const res = await GetRequest("/transaction");
    console.log(res.data);
    setTransactions(res.data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <div className="px-md pt-md">
      <div className="flex justify-between">
        <div>Transactions</div>
        <Button color="orange" onClick={open}>
          Add Video
        </Button>
      </div>

      {transactions.map((v, key) => (
        <div>{v.title}</div>
      ))}

      <Modal opened={opened} onClose={close} title="Authentication">
        <AddTransaction
          close={close}
          parentTransactions={transactions}
          setParentTransactions={setTransactions}
        />
      </Modal>
    </div>
  );
};

export default DashboardTransactions;
