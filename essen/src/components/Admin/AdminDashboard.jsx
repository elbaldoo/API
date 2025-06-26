import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ManageDishes from "./ManageDishes";
import ManageUser from "./ManageUser";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook para redireccionar

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    localStorage.removeItem("user"); // Elimina los datos del usuario
    setUser(null); // Limpia el estado del usuario
    navigate("/admin/login"); // Redirige al login
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
        <div className="user-login-section">
          {user ? (
            <>
              <span>Bienvenido, {user.nombre_usuario}</span>
              <button
                onClick={handleLogout}
                className="logout-button"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/admin/login">Login</Link>
          )}
        </div>
      </header>
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin/dishes">Manage Dishes</Link>
          </li>
          <li>
            <Link to="/admin/users">Manage Users</Link>
          </li>
        </ul>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="dishes" element={<ManageDishes />} />
          <Route path="users" element={<ManageUser />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;