import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthAdmin = ({ element }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const user = cookies.get("user");

  return token && user?.isAdmin ? element : <Navigate to="/login" />;
};

export default AuthAdmin;
