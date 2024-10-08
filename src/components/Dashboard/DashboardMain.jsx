import { Link } from "react-router-dom";
import { FaUsers, FaRegComments } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL, COMMENTS, COUNT, POSTS, USERS } from "../../api/api";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const DashboardMain = () => {
  const [users, setUsers] = useState(0);
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  // getCount
  async function getCount() {
    try {
      let res = await axios.get(`${BASEURL}/${POSTS}/${COUNT}`);
      setCount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  }

  // getUsers
  async function getUsers() {
    try {
      let res = await axios.get(`${BASEURL}/${USERS}`, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsers(res.data.count);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  // getUsers
  async function getComments() {
    try {
      let res = await axios.get(`${BASEURL}/${COMMENTS}`, {
        headers: { Authorization: "Bearer " + token },
      });
      setComments(res.data.comments);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    getUsers();
    getCount();
    getComments();
  }, []);

  return (
    <div className="cards py-5 px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="card flex flex-col gap-2 p-2 capitalize shadow shadow-[#6C63FF]">
        <h5 className="font-bold">users</h5>
        <span className="text-red-500 font-semibold">{users}</span>
        <div className="flex items-center justify-between">
          <Link to="users" className="bg-green-500 text-white p-1 rounded-md">
            see all users
          </Link>
          <FaUsers size={30} />
        </div>
      </div>
      <div className="card flex flex-col gap-2 p-2 capitalize shadow shadow-[#6C63FF]">
        <h5 className="font-bold">posts</h5>
        <span className="text-red-500 font-semibold">{count}</span>
        <div className="flex items-center justify-between">
          <Link to="posts" className="bg-green-500 text-white p-1 rounded-md">
            see all posts
          </Link>
          <BsPostcard size={30} />
        </div>
      </div>
      <div className="card flex flex-col gap-2 p-2 capitalize shadow shadow-[#6C63FF]">
        <h5 className="font-bold">categories</h5>
        <span className="text-red-500 font-semibold">10</span>
        <div className="flex items-center justify-between">
          <Link
            to="categories"
            className="bg-green-500 text-white p-1 rounded-md pointer-events-none"
          >
            see all categories
          </Link>
          <BiCategory size={30} />
        </div>
      </div>
      <div className="card flex flex-col gap-2 p-2 capitalize shadow shadow-[#6C63FF]">
        <h5 className="font-bold">comments</h5>
        <span className="text-red-500 font-semibold">{comments.length}</span>
        <div className="flex items-center justify-between">
          <Link
            to="comments"
            className="bg-green-500 text-white p-1 rounded-md"
          >
            see all comments
          </Link>
          <FaRegComments size={30} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
