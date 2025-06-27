import React, { useState, useEffect } from "react";
import "./ManageUser.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [newUser, setNewUser] = useState({ nombre_usuario: "", email: "", password: "", rol_id: "" });
  const [editableUserId, setEditableUserId] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false); // Nuevo estado para mostrar/ocultar el form

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/roles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching roles");
      }

      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Error adding user");
      }

      fetchUsers();
      setNewUser({ nombre_usuario: "", email: "", password: "", rol_id: "" });
      setShowAddUser(false); // Oculta el form después de agregar
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditUser = (userId) => {
    setEditableUserId(userId); // Habilita la edición para el usuario seleccionado
  };

  const handleSaveUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const updatedUser = users.find((user) => user.id === userId);
      const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("Error editing user");
      }

      fetchUsers();
      setEditableUserId(null); // Deshabilita la edición después de guardar
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token"); // Obtén el token desde localStorage
      const response = await fetch(`http://localhost:3000/api/usuarios/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Usa el token dinámicamente
        },
      });

      if (!response.ok) {
        throw new Error("Error deleting user");
      }

      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="users-section">
      <h3>Usuarios</h3>
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        onClick={() => setShowAddUser((prev) => !prev)}
      >
        {showAddUser ? "Ocultar formulario" : "Agregar Usuario"}
      </button>
      {showAddUser && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6 items-end bg-gray-100 p-2 rounded">
          <input
            type="text"
            placeholder="Username"
            value={newUser.nombre_usuario}
            onChange={(e) => setNewUser({ ...newUser, nombre_usuario: e.target.value })}
            className="add-user-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="add-user-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            className="add-user-input"
          />
          <select
            value={newUser.rol_id}
            onChange={(e) => setNewUser({ ...newUser, rol_id: e.target.value })}
            className="add-user-input"
          >
            <option value="">Rol</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.nombre}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddUser}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded text-xs md:col-span-3"
          >
            Crear
          </button>
        </div>
      )}

    
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nombre Usuario</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Rol</th>
            <th className="border border-gray-300 px-4 py-2">Fecha Creación</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={user.nombre_usuario}
                  onChange={(e) =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id ? { ...u, nombre_usuario: e.target.value } : u
                      )
                    )
                  }
                  disabled={editableUserId !== user.id}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id ? { ...u, email: e.target.value } : u
                      )
                    )
                  }
                  disabled={editableUserId !== user.id}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={user.rol_id}
                  onChange={(e) =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id ? { ...u, rol_id: e.target.value } : u
                      )
                    )
                  }
                  disabled={editableUserId !== user.id}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                >
                  <option value="">Seleccionar Rol</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.nombre}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={user.fecha_creacion}
                  readOnly
                  className="border border-gray-300 rounded px-2 py-1 w-full bg-gray-100"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editableUserId === user.id ? (
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleSaveUser(user.id)}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEditUser(user.id)}
                  >
                    Modificar
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;