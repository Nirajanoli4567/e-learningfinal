import { Button, NumberInput, Select, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { GetRequest, PostRequest } from "../../../../plugins/https";

const AddTransaction = (props) => {
  const { close, parentTransactions, setParentTransactions } = props;
  const [category, setCategory] = useState([]);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await GetRequest("/videos");
    console.log(res.data);
    let modifiedCategory = [];
    res.data.map((v, key) => {
      modifiedCategory.push({
        label: v.title,
        value: v._id,
      });
    });
    setCategory(modifiedCategory);

    const accountRes = await GetRequest("/videos");
    console.log(accountRes.data);
    let modifiedAccount = [];
    accountRes.data.map((v, key) => {
      modifiedAccount.push({
        label: v.title,
        value: v._id,
      });
    });

    setAccount(modifiedAccount);
  };

  const [video, setTransaction] = useState({
    title: "",
    video: "",
  });

  const handleInput = (e) => {
    setTransaction({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(video);

    const res = await PostRequest("/video", video);
    console.log(res.data);

    setParentTransactions([...parentTransactions, res.data]);

    close();
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/video/getAll");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="div">
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              {item.title} {/* Adjust based on your schema */}
            </li>
          ))}
        </ul>
      </div>{" "}
      <form onSubmit={submitForm} className="flex flex-col gap-sm">
        <div>
          <div>Title</div>
          <TextInput name="title" onChange={handleInput} value={video.title} />
        </div>
        <div>
          <div>video url</div>
          <TextInput name="video" onChange={handleInput} value={video.video} />
        </div>

        <Button color="orange" className="mt-sm" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTransaction;
