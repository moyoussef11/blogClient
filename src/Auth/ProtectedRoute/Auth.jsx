import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Auth = ({ element }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return token ? <Navigate to="/" replace /> : element;
};

export default Auth;
