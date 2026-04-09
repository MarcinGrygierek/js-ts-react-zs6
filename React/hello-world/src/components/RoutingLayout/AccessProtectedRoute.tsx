import { Navigate, Outlet } from "react-router-dom";

export const AccessProtectedRoute = () => {
  const hasAccess = Math.random() > 0.5;
  
  console.log("Has access", hasAccess);

  if (hasAccess) return <Outlet />;

  return <Navigate to="/" />;
};
