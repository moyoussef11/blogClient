import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL, USERS } from "../../api/api";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  // getUsers
  async function getUsers() {
    try {
      let res = await axios.get(`${BASEURL}/${USERS}`, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsers(res.data.users);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  // deleteUser
  async function deleteUser(id) {
    try {
      await axios.delete(`${BASEURL}/${USERS}/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      toast.success("deleted successfully");
      getUsers();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  // renderUi
  const showUsers = users.map((user, index) => (
    <tr key={user._id} className="text-center mx-auto even:bg-slate-200">
      <td className="border border-slate-300 p-2">{index + 1}</td>
      <td className="border border-slate-300 p-2">
        <div className="flex items-center justify-center gap-2">
          <img
            className="hidden sm:block h-12 w-12 rounded-full object-cover"
            src={user.avatar.url}
            alt="user"
          />
          <span className="text-sm font-bold">{user.username}</span>
        </div>
      </td>
      <td className="border border-slate-300 p-2">{user.email}</td>
      <td className="border border-slate-300 p-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2">
          <Link
            to={`/profile/${user._id}`}
            className="p-1 text-sm rounded capitalize font-semibold text-white bg-green-500"
          >
            view profile
          </Link>
          <button
            onClick={() => deleteUser(user._id)}
            className="p-1 text-sm rounded capitalize font-semibold text-white bg-red-500"
          >
            delete user
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="md:p-5">
      <h4 className="md:text-3xl capitalize font-bold border-b-2 border-black w-fit mb-3 pb-2">
        users
      </h4>
      <table className="w-full   table-auto lg:table-fixed border border-spacing-2 border-slate-400 border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="border border-slate-300">#id</th>
            <th className="border border-slate-300">user</th>
            <th className="border border-slate-300">email</th>
            <th className="border border-slate-300">action</th>
          </tr>
        </thead>
        <tbody className="">{showUsers}</tbody>
      </table>
    </div>
  );
};

export default Users;
