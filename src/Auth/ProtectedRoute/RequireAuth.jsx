import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const RequireAuth = ({element}) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return token ? element : <Navigate to="/login" replace />;
};

export default RequireAuth;
