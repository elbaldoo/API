"use client";

import { useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Dish = ({ dish }) => {
  
  const imagePath = dish.image ? require(`../img/${dish.image}`) : require("../img/logo.jpeg");

  return (
    <div className="card dish-card h-full flex flex-col justify-between">
      {/* Imagen del plato */}
      <img
        src={imagePath} 
        alt={dish.nombre || "Plato"}
        className="card-img-top cursor-pointer"
      />

      <div className="card-body flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="dish-title text-md md:text-xl flex-1 break-words whitespace-normal">
              {dish.nombre || "Nombre no disponible"}
            </h3>
            <span className="dish-price text-xs md:text-lg whitespace-nowrap">
              {dish.precio ? `${parseFloat(dish.precio).toFixed(2)} €` : "Precio no disponible"}
            </span>
          </div>

          <p className="dish-description text-xs md:text-sm">
            {dish.descripcion || "Descripción no disponible"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dish;