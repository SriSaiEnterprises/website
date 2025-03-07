// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  // If the user is not authenticated, redirect to the /auth route
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;