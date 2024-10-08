import Lottie from "lottie-react";
import Error from "./error404.json";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="w-1/2 m-auto text-center">
      <Lottie loop={true} animationData={Error} />
      <Link
        to="/"
        className="capitalize bg-[#6c63ff] text-white p-3 rounded-full"
      >
        Back to home
      </Link>
    </div>
  );
};

export default Error404;
