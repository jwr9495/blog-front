import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";
import TagList from "./TagList";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [tags, setTags] = useState(null);

  const getTags = async () => {
    const url = "http://localhost:3000/api/tag";
    const { data } = await axios.get(url);
    setTags(data.tags);
  };

  const getPosts = async () => {
    const url = "http://localhost:3000/api/post";
    const { data } = await axios.get(url);
    console.log(data);
    setPosts(data.posts);
  };
  const getAll = async () => {
    await getPosts();
    await getTags();
  };
  useEffect(async () => {
    getAll();
  }, []);

  return (
    <>
      <TagList tags={tags} />
      <Main posts={posts} />
    </>
  );
}
