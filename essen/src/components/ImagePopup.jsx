import React from "react";

const ImagePopup = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={image}
          alt="Imagen seleccionada"
          className="max-w-full max-h-screen rounded-lg"
        />
        <button
          className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;