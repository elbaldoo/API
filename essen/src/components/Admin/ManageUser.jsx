import React, { useState, useEffect } from "react";
import "./ManageUser.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [newUser, setNewUser] = useState({ nombre_usuario: "", email: "", password: "", rol_id: "" });
  const [editableUserId, setEditableUserId] = useState(null); // Estado para controlar qué usuario está en modo edición

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
      const token = localStorage.getItem("token"); // Obtén el token desde localStorage
      const response = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Usa el token dinámicamente
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Error adding user");
      }

      fetchUsers(); // Refresh the list of users
      setNewUser({ username: "", email: "", password: "", rol_id: "" }); // Reset the form
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
      <h3>Manage Users</h3>
      <input
        type="text"
        placeholder="Username"
        value={newUser.nombre_usuario}
        onChange={(e) => setNewUser({ ...newUser, nombre_usuario: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <select
        value={newUser.rol_id}
        onChange={(e) => setNewUser({ ...newUser, rol_id: e.target.value })}
        className="border border-gray-300 rounded px-2 py-1 w-full"
      >
        <option value="">Seleccionar Rol</option>
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.nombre}
          </option>
        ))}
      </select>
      <button onClick={handleAddUser}>Add User</button>

      <h2>Lista de Usuarios</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nombre Usuario</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Rol</th>
            <th className="border border-gray-300 px-4 py-2">Eliminado</th>
            <th className="border border-gray-300 px-4 py-2">Fecha Creación</th>
            <th className="border border-gray-300 px-4 py-2">Fecha Modificación</th>
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
                  disabled={editableUserId !== user.id} // Bloquea el campo si no está en modo edición
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
                  disabled={editableUserId !== user.id} // Bloquea el campo si no está en modo edición
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
                  disabled={editableUserId !== user.id} // Bloquea el campo si no está en modo edición
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
                  type="checkbox"
                  checked={user.eliminado}
                  onChange={(e) =>
                    setUsers(
                      users.map((u) =>
                        u.id === user.id ? { ...u, eliminado: e.target.checked } : u
                      )
                    )
                  }
                  disabled // Siempre bloqueado
                  className="border border-gray-300 rounded"
                />
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
                <input
                  type="text"
                  value={user.fecha_modificacion}
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