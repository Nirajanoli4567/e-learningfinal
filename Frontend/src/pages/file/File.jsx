import React from "react";
import { useState } from "react";
import { Text, Image, SimpleGrid, TextInput, Button } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import axios from "axios";
import { PostRequest } from "../../plugins/https";

const File = () => {
  const [files, setFiles] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    category: "",
  });

  const handleInput = (event) => {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value,
    });
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  const convertToFormData = (obj) => {
    const formData = new FormData();
    for (const key in obj) {
      formData.append(key, obj[key]);
    }
    return formData;
  };

  const addBlog = async (event) => {
    event.preventDefault();

    const formData = convertToFormData(blog);
    formData.append("file", files[0]);

    const res = await PostRequest("/blog", formData);
  };
  return (
    <div className="m-3xl p-3xl">
      <form action="" className="flex flex-col gap-sm" onSubmit={addBlog}>
        <TextInput
          label="title"
          placeholder="title"
          name="title"
          onChange={handleInput}
          value={blog.title}
        />
        <TextInput
          label="category"
          placeholder="category"
          name="category"
          onChange={handleInput}
          value={blog.category}
        />

        <div>
          <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} maxFiles={1}>
            <Text ta="center">Drop images here</Text>
          </Dropzone>

          <SimpleGrid
            cols={{ base: 1, sm: 4 }}
            mt={previews.length > 0 ? "xl" : 0}
          >
            {previews}
          </SimpleGrid>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default File;
