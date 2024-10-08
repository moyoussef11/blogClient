import { useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="px-3 md:px-10 py-3 bg-[#6C63FF] flex items-center justify-between relative">
      <HeaderLeft toggle={toggle} setToggle={setToggle} />
      <HeaderNav toggle={toggle} setToggle={setToggle} />
      <HeaderRight />
    </div>
  );
};

export default Header;
