import { ReactNode } from "react";
import { useCurrentToken } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
