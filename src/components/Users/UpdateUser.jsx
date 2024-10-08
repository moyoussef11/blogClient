import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BASEURL, USERS } from "../../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateUser = ({setToggle, user, token }) => {
  const [name, setName] = useState(user.username);
  const [password, setPassword] = useState("");
  const id = user._id;

  // handleUpdateUser
  async function updateUser(e) {
    e.preventDefault();
    if (!name) return toast.error("name is required");
    try {
      let res = await axios.patch(
        `${BASEURL}/${USERS}/${id}`,
        {
          username: name,
          password,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success(res.data.msg);
      setToggle(false);
    } catch (error) {
      return toast.error(error.response.data.msg);
    }
  }

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 z-20 bg-slate-700 opacity-90 flex items-center justify-center">
      <div className="bg-white w-1/2 p-5 text-center capitalize rounded relative flex flex-col gap-3">
        <h4 className="text-2xl text-green-600">update your profile</h4>
        <span
          onClick={() => setToggle(false)}
          className="text-red-600 absolute right-2 top-2 cursor-pointer"
        >
          <IoIosCloseCircleOutline size={30} />
        </span>
        <form onSubmit={updateUser} className="flex flex-col w-full gap-10">
          <input
            type="text"
            className=" w-full border border-gray-400 rounded p-2"
            placeholder="Enter your name"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className=" w-full border border-gray-400 rounded p-2"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full p-1 bg-green-500 text-white" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
