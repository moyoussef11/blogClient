import { IoCloseSharp } from "react-icons/io5";
import {  CiMenuBurger } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { Link } from "react-router-dom";

const HeaderLeft = ({ toggle, setToggle }) => {
  return (
    <div className="flex items-center gap-2 text-white z-20">
      <div
        onClick={() => setToggle(!toggle)}
        className="md:hidden cursor-pointer"
      >
        {toggle ? <CiMenuBurger size={30} /> : <IoCloseSharp size={30} />}
      </div>
      <Link to='/' className="flex items-center gap-2">
        <GrBlog size={35} />
        <strong>Blog</strong>
      </Link>
    </div>
  );
};

export default HeaderLeft;
