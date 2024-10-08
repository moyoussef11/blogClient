import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaRegComments } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const isMatch = pathname.split("/")[2];

  return (
    <div className="border-r-2 h-screen border-gray-400 flex flex-col gap-10 py-5">
      <Link
        to="/dashboard"
        className={`flex items-center gap-1 ${
          isMatch == null ? "activeSideBar" : ""
        }`}
      >
        <MdDashboard size={25} />
        <h3>Dashboard</h3>
      </Link>
      <ul className="flex flex-col gap-5 ">
        <li
          className={`hover:text-[#6C63FF] duration-150 w-fit hover:font-bold ${
            isMatch === "users" ? "activeSideBar" : ""
          }`}
        >
          <Link to="users" className="flex items-center gap-1 capitalize">
            <FaUsers size={25} />
            <span>users</span>
          </Link>
        </li>
        <li
          className={`hover:text-[#6C63FF] duration-150 w-fit hover:font-bold ${
            isMatch === "posts" ? "activeSideBar" : ""
          }`}
        >
          <Link to="posts" className="flex items-center gap-1 capitalize">
            <BsPostcard size={25} />
            <span>posts</span>
          </Link>
        </li>

        <li
          className={`hover:text-[#6C63FF] duration-150 w-fit hover:font-bold ${
            isMatch === "comments" ? "activeSideBar" : ""
          }`}
        >
          <Link to="comments" className="flex items-center gap-1 capitalize">
            <FaRegComments size={25} />
            <span>comments</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
