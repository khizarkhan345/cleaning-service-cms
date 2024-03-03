import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
// interface ProtectedRouteProps extends RouteProps {
//     component: React.ComponentType<any>;
// }

export const ProtectRoutes = () => {
  //const navigate = useNavigate();
  const { token } = useContext(MyContext);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoutes;
