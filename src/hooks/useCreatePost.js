import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { BASEURL, POSTS } from "../api/api";

const useCreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const cookies = new Cookies();
  const nav = useNavigate();
  const token = cookies.get("token");
  const userId = cookies.get("user")?._id;

  // handleCreateNewPost
  async function addPost(e) {
    e.preventDefault();
    if (!title) return toast.error("Title is required");
    if (!category) return toast.error("Category is required");
    if (!description) return toast.error("Description is required");
    if (!file) return toast.error("Image is required");
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("user", userId);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      let res = await axios.post(`${BASEURL}/${POSTS}`, formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success(`${res.data.status}: Post Created Successfully`);
      nav("/");
    } catch (error) {
      return toast.error(error.response.data.msg);
    }
  }
  return {
    setTitle,
    setFile,
    setCategory,
    setDescription,
    addPost,
  };
};

export default useCreatePost;
