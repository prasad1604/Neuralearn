import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  console.log("ProtectedRoute Check - Token exists:", !!token); // 👈
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;