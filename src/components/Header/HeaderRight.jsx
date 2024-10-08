import { Link, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { Cookies, useCookies } from "react-cookie";
import {  useState } from "react";
const HeaderRight = () => {
  const [toggle, setToggle] = useState(false);
  const [cookies, removeCookie] = useCookies();
  const cookiesUn = new Cookies();
  const token = cookies.token;
  const name = cookies?.user?.username;
  const image =  cookies?.user?.avatar?.url;
  const id = cookies?.user?._id;
  const nav = useNavigate();
  // handleLogout
  function logout() {
    removeCookie("token");
    removeCookie("user");
    removeCookie("image");
    cookiesUn.remove("token");
    cookiesUn.remove("user");
    cookiesUn.remove("image");
    nav("/login");
    setToggle(false);
  }

  return (
    <>
      {token ? (
        <div className="relative">
          <div className="flex flex-col justify-center items-center">
            <Link to={`/profile/${id}`}>
              {" "}
              <img className="h-10 w-10 rounded-full" src={image} alt="user" />
            </Link>
            <span className="text-sm capitalize text-white flex items-center gap-2">
              {name}{" "}
              <FaArrowDown
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer"
              />{" "}
            </span>
          </div>
          <div
            className={`absolute bg-[#6C63FF] left-0 ${
              !toggle ? "hidden" : "block"
            } w-full h-14 flex items-center justify-center rounded`}
          >
            <button
              onClick={logout}
              className="bg-white text-[#6C63FF] p-2 capitalize rounded"
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1 md:gap-2">
          <Link
            className="flex items-center gap-1 bg-white text-[#6C63FF] p-2 capitalize rounded"
            to="/login"
          >
            <IoMdLogIn />
            <span>login</span>
          </Link>
          <Link
            className="flex items-center gap-1 bg-white text-[#6C63FF] p-2 capitalize rounded"
            to="/register"
          >
            <FaUserPlus />
            <span>register</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderRight;
