import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ManageDishes from "./ManageDishes";
import ManageUsers from "./ManageUsers";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
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
      <Routes>
        <Route path="dishes" element={<ManageDishes />} />
        <Route path="users" element={<ManageUsers />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;