import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { BASEURL, LIKE, POSTS } from "../api/api";
const usePostDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [post, setPost] = useState({});
  const { id } = useParams();
  const userId = post?.user?._id;
  const cookies = new Cookies();
  const token = cookies.get("token");
  const user = cookies.get("user");
  const loggedUser = user?._id;
  const nav = useNavigate();

  // toggleLike
  async function toggleLike() {
    try {
      let res = await axios.put(
        `${BASEURL}/${POSTS}/${LIKE}/${id}`,
        {
          userId,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success(res.data.status);
      getPost();
    } catch (error) {
      console.log(error);
      return toast.error("Go to login");
    }
  }

  // deletePost
  async function deletePost(id) {
    try {
      await axios.delete(`${BASEURL}/${POSTS}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success("deleted done");
      nav(`/profile/${loggedUser}`);
    } catch (error) {
      console.log(error);
    }
  }

  // getPost
  async function getPost() {
    try {
      let res = await axios.get(`${BASEURL}/${POSTS}/${id}`);
      setPost(res.data.post);
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    getPost();
    window.scrollTo(0, 0);
  }, [toggle]);
  return {
    post,
    toggleLike,
    loggedUser,
    userId,
    setToggle,
    deletePost,
    token,
    getPost,
    id,
    toggle,
    user,
  };
};

export default usePostDetails;
