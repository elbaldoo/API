import React, { useState, useEffect } from "react";

const ManageDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ nombre: "", precio: "", descripcion: "", image: "" });

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dishes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching dishes");
      }

      const data = await response.json();
      setDishes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddDish = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDish),
      });

      if (!response.ok) {
        throw new Error("Error adding dish");
      }

      fetchDishes(); // Refresh the list of dishes
      setNewDish({ nombre: "", precio: "", descripcion: "", image: "" }); // Reset the form
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dishes-section">
      <h3>Manage Dishes</h3>
      <input
        type="text"
        placeholder="Dish Name"
        value={newDish.nombre}
        onChange={(e) => setNewDish({ ...newDish, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Price"
        value={newDish.precio}
        onChange={(e) => setNewDish({ ...newDish, precio: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newDish.descripcion}
        onChange={(e) => setNewDish({ ...newDish, descripcion: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image Filename"
        value={newDish.image}
        onChange={(e) => setNewDish({ ...newDish, image: e.target.value })}
      />
      <button onClick={handleAddDish}>Add Dish</button>

      <h2>Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            {dish.nombre} - {dish.precio} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageDishes;