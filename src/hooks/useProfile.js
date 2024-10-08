import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASEURL, USERS } from "../api/api";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const useProfile = () => {
  const [user, setUser] = useState([]);
  const [file, setFile] = useState();
  const [toggle, setToggle] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("token");
  const userId = cookies.get("user")._id;
  const posts = user?.posts;

  // upload-profile-photo
  const uploadPhoto = async (e) => {
    e.preventDefault();
    try {
      if (userId !== id) {
        return toast.error("not allowed");
      }

      const formData = new FormData();
      formData.append("avatar", file);
      let res = await axios.patch(
        `${BASEURL}/${USERS}/upload-profile-photo/${id}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success(res.data.msg);
      setUploaded(!uploaded);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  // deleteUser
  async function deleteUser(id) {
    try {
      let res = await axios.delete(`${BASEURL}/${USERS}/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      cookies.remove("token");
      cookies.remove("user");
      toast.success(res.data.msg);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  }

  // getUser
  const getUser = async () => {
    try {
      let res = await axios.get(`${BASEURL}/${USERS}/${id}`);
      setUser(res.data.user);
      cookies.set("user", res.data.user);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      nav("/");
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [uploaded, toggle]);
  return {
    user,
    file,
    setFile,
    uploadPhoto,
    toggle,
    setToggle,
    posts,
    token,
    userId,
    id,
    deleteUser,
  };
};

export default useProfile;
