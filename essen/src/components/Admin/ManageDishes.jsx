import React, { useState, useEffect } from "react";

const ManageDishes = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  // Form states
  const [newCategory, setNewCategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState({ nombre: "", categoria_id: "" });
  const [newDish, setNewDish] = useState({ nombre: "", precio: "", descripcion: "", image: "", categoria_id: "", subcategoria_id: "" });

  // Mostrar/ocultar formularios
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddSubcategory, setShowAddSubcategory] = useState(false);
  const [showAddDish, setShowAddDish] = useState(false);

  // Estado para edición de plato
  const [editDishId, setEditDishId] = useState(null);
  const [editDish, setEditDish] = useState({ nombre: "", precio: "", descripcion: "", image: "", categoria_id: "", subcategoria_id: "" });

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    fetchDishes();
  }, []);


  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/categorias");
      const data = await res.json();
      setCategories(data);
    } catch (e) {
      console.error("Error fetching categories", e);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/subcategorias");
      const data = await res.json();
      setSubcategories(data);
    } catch (e) {
      console.error("Error fetching subcategories", e);
    }
  };

  const fetchDishes = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/platos");
      const data = await res.json();
      setDishes(data);
    } catch (e) {
      console.error("Error fetching dishes", e);
    }
  };

  // Create category
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await fetch("http://localhost:3000/api/categorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: newCategory }),
      });
      setNewCategory("");
      fetchCategories();
    } catch (e) {
      console.error("Error adding category", e);
    }
  };

  // Create subcategory
  const handleAddSubcategory = async () => {
    if (!newSubcategory.nombre.trim() || !newSubcategory.categoria_id) return;
    try {
      await fetch("http://localhost:3000/api/subcategorias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSubcategory),
      });
      setNewSubcategory({ nombre: "", categoria_id: "" });
      fetchSubcategories();
    } catch (e) {
      console.error("Error adding subcategory", e);
    }
  };

  // Create dish
  const handleAddDish = async () => {
    if (!newDish.nombre.trim() || !newDish.precio || !newDish.categoria_id || !newDish.subcategoria_id) return;
    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:3000/api/platos", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(newDish),
      });
      setNewDish({ nombre: "", precio: "", descripcion: "", image: "", categoria_id: "", subcategoria_id: "" });
      fetchDishes();
    } catch (e) {
      console.error("Error adding dish", e);
    }
  };

  // Editar plato
  const handleEditClick = (dish) => {
    setEditDishId(dish.id);
    setEditDish({
      nombre: dish.nombre,
      precio: dish.precio,
      descripcion: dish.descripcion,
      image: dish.image,
      categoria_id: dish.categoria_id || (dish.categoria && dish.categoria.id) || "",
      subcategoria_id: dish.subcategoria_id || (dish.subcategoria && dish.subcategoria.id) || "",
    });
  };

  const handleEditDishSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:3000/api/platos/${editDishId}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editDish),
      });
      setEditDishId(null);
      setEditDish({ nombre: "", precio: "", descripcion: "", image: "", categoria_id: "", subcategoria_id: "" });
      fetchDishes();
    } catch (e) {
      console.error("Error updating dish", e);
    }
  };

  const handleEditDishCancel = () => {
    setEditDishId(null);
    setEditDish({ nombre: "", precio: "", descripcion: "", image: "", categoria_id: "", subcategoria_id: "" });
  };

  // Filter subcategories by selected category (para edición)
  const filteredEditSubcategories = editDish.categoria_id
    ? subcategories.filter((s) => String(s.categoria_id) === String(editDish.categoria_id))
    : [];

  // Filter subcategories by selected category (para alta)
  const filteredSubcategories = newDish.categoria_id
    ? subcategories.filter((s) => String(s.categoria_id) === String(newDish.categoria_id))
    : [];

  return (
    <div className="dishes-section">
      <h3 className="text-xl font-bold mb-2">Platos</h3>

      {/* Botón y formulario para crear categoría */}
      <button
        className="mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
        onClick={() => setShowAddCategory((prev) => !prev)}
      >
        {showAddCategory ? "Ocultar formulario de categoría" : "Agregar Categoría"}
      </button>
      {showAddCategory && (
        <div className="mb-4 bg-gray-100 p-3 rounded">
          <h4 className="font-semibold mb-1">Crear Nueva Categoría</h4>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nombre de la categoría"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <button
              onClick={handleAddCategory}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Crear
            </button>
          </div>
        </div>
      )}

      {/* Botón y formulario para crear subcategoría */}
      <button
        className="ml-4 mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
        onClick={() => setShowAddSubcategory((prev) => !prev)}
      >
        {showAddSubcategory ? "Ocultar formulario de subcategoría" : "Agregar Subcategoría"}
      </button>
      {showAddSubcategory && (
        <div className="mb-4 bg-gray-100 p-3 rounded">
          <h4 className="font-semibold mb-1">Crear Nueva Subcategoría</h4>
          <div className="flex gap-2 flex-wrap">
            <select
              value={newSubcategory.categoria_id}
              onChange={(e) => setNewSubcategory({ ...newSubcategory, categoria_id: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Seleccionar Categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Nombre de la subcategoría"
              value={newSubcategory.nombre}
              onChange={(e) => setNewSubcategory({ ...newSubcategory, nombre: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <button
              onClick={handleAddSubcategory}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Crear
            </button>
          </div>
        </div>
      )}

      {/* Botón y formulario para crear plato */}
      <button
        className="ml-4 mb-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
        onClick={() => setShowAddDish((prev) => !prev)}
      >
        {showAddDish ? "Ocultar formulario de plato" : "Agregar Plato"}
      </button>
      {showAddDish && (
        <div className="mb-4 bg-gray-100 p-3 rounded">
          <h4 className="font-semibold mb-1">Crear Nuevo Plato</h4>
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Nombre del plato"
              value={newDish.nombre}
              onChange={(e) => setNewDish({ ...newDish, nombre: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Precio"
              value={newDish.precio}
              onChange={(e) => setNewDish({ ...newDish, precio: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Descripción"
              value={newDish.descripcion}
              onChange={(e) => setNewDish({ ...newDish, descripcion: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Imagen (filename)"
              value={newDish.image}
              onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <select
              value={newDish.categoria_id}
              onChange={(e) => setNewDish({ ...newDish, categoria_id: e.target.value, subcategoria_id: "" })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
            <select
              value={newDish.subcategoria_id}
              onChange={(e) => setNewDish({ ...newDish, subcategoria_id: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              disabled={!newDish.categoria_id}
            >
              <option value="">Subcategoría</option>
              {filteredSubcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>{sub.nombre}</option>
              ))}
            </select>
            <button
              onClick={handleAddDish}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Crear
            </button>
          </div>
        </div>
      )}

      {/* Pantalla de edición de plato */}
      {editDishId && (
        <div className="mb-4 bg-yellow-100 p-3 rounded">
          <h4 className="font-semibold mb-1">Modificar Plato</h4>
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Nombre del plato"
              value={editDish.nombre}
              onChange={(e) => setEditDish({ ...editDish, nombre: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Precio"
              value={editDish.precio}
              onChange={(e) => setEditDish({ ...editDish, precio: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Descripción"
              value={editDish.descripcion}
              onChange={(e) => setEditDish({ ...editDish, descripcion: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            {/* Campo imagen solo en edición */}
            <input
              type="text"
              placeholder="Imagen (filename)"
              value={editDish.image}
              onChange={(e) => setEditDish({ ...editDish, image: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <select
              value={editDish.categoria_id}
              onChange={(e) => setEditDish({ ...editDish, categoria_id: e.target.value, subcategoria_id: "" })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
            <select
              value={editDish.subcategoria_id}
              onChange={(e) => setEditDish({ ...editDish, subcategoria_id: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              disabled={!editDish.categoria_id}
            >
              <option value="">Subcategoría</option>
              {filteredEditSubcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>{sub.nombre}</option>
              ))}
            </select>
            {/* Campo disponible en edición */}
            <select
              value={editDish.disponible ?? ""}
              onChange={(e) => setEditDish({ ...editDish, disponible: e.target.value })}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Disponible?</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
            <button
              onClick={handleEditDishSave}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
            >
              Guardar
            </button>
            <button
              onClick={handleEditDishCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Listar Platos */}
      <h4 className="font-semibold mb-2 mt-6">Lista de Platos</h4>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">Nombre</th>
            <th className="border border-gray-300 px-2 py-1">Precio</th>
            <th className="border border-gray-300 px-2 py-1">Descripción</th>
            <th className="border border-gray-300 px-2 py-1">Categoría</th>
            <th className="border border-gray-300 px-2 py-1">Subcategoría</th>
            <th className="border border-gray-300 px-2 py-1">Disponible</th>
            <th className="border border-gray-300 px-2 py-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => {
            const categoria = categories.find((c) => String(c.id) === String(dish.categoria.id));
            const subcategoria = subcategories.find((s) => String(s.id) === String(dish.subcategoria.id));
            return (
              <tr key={dish.id}>
                <td className="border border-gray-300 px-2 py-1">{dish.nombre}</td>
                <td className="border border-gray-300 px-2 py-1">{dish.precio} €</td>
                <td className="border border-gray-300 px-2 py-1">{dish.descripcion}</td>
                <td className="border border-gray-300 px-2 py-1">{categoria ? categoria.nombre : ""}</td>
                <td className="border border-gray-300 px-2 py-1">{subcategoria ? subcategoria.nombre : ""}</td>
                <td className="border border-gray-300 px-2 py-1">
                  {dish.disponible === true || dish.disponible === "true" ? "Sí" : "No"}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs"
                    onClick={() => handleEditClick(dish)}
                  >
                    Modificar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDishes;