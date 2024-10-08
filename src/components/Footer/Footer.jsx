import { GrBlog } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="py-2 flex items-center justify-center gap-2 text-white bg-[#6C63FF]">
      <GrBlog size={35} />
      <strong>©Blog</strong>
      <p> 2024, All rights reserved.</p>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="absolute right-10 bg-white text-[#6C63FF] p-2 rounded-full font-bold cursor-pointer"
      >
        up
      </button>
    </div>
  );
};

export default Footer;
