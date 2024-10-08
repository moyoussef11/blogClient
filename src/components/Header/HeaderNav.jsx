import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiSignpostDuo1 } from "react-icons/ci";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { useCookies } from "react-cookie";

const HeaderNav = ({ toggle, setToggle }) => {
  const [cookies] = useCookies();
  const token = cookies?.token;
  const isAdmin = cookies?.user?.isAdmin;
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex items-center justify-between gap-5">
          <li>
            <Link className="flex items-center gap-1 text-white" to="/">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 text-white" to="/posts">
              <CiSignpostDuo1 />
              <span>posts</span>
            </Link>
          </li>
          {token ? (
            <li>
              <Link
                className="flex items-center gap-1 text-white"
                to="/create-post"
              >
                <MdOutlineLibraryAdd />
                <span>create post</span>
              </Link>
            </li>
          ) : (
            ""
          )}
          {isAdmin === true ? (
            <li>
              <Link
                className="flex items-center gap-1 text-white"
                to="/dashboard"
              >
                <RiAdminFill />
                <span>admin dashboard</span>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
      <nav
        className={`px-3 md:px-10 md:hidden py-2 bg-[#6C63FF] w-full z-10 duration-300 absolute left-0 ${
          !toggle ? "top-16" : "-top-40"
        }`}
      >
        <ul className="flex flex-col items-center justify-between gap-5">
          <li>
            <Link
              onClick={() => setToggle(true)}
              className="flex items-center gap-1 text-white"
              to="/"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(true)}
              className="flex items-center gap-1 text-white"
              to="/posts"
            >
              <CiSignpostDuo1 />
              <span>posts</span>
            </Link>
          </li>
          {token ? (
            <li>
              <Link
                className="flex items-center gap-1 text-white"
                to="/create-post"
              >
                <MdOutlineLibraryAdd />
                <span>create post</span>
              </Link>
            </li>
          ) : (
            ""
          )}

          {isAdmin === true ? (
            <li>
              <Link
                className="flex items-center gap-1 text-white"
                to="/dashboard"
              >
                <RiAdminFill />
                <span>admin dashboard</span>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
