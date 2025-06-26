import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.jpeg";
import restaurant1 from "../img/restaurant1.png"; // Imagen 1
import restaurant2 from "../img/restaurant2.png"; // Imagen 2
import restaurant3 from "../img/restaurant3.png"; // Imagen 3
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada

  const openImage = (image) => {
    setSelectedImage(image); // Establece la imagen seleccionada
  };

  const closeImage = () => {
    setSelectedImage(null); // Cierra el popup
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center text-center px-4 py-8">
      {/* Logo e Introducción */}
      <img src={logo} alt="Essen Logo" className="w-40 mb-6" />
      <h1 className="text-4xl font-bold mb-2">Essen Restaurant</h1>
      <p className="text-lg mb-6 max-w-xl">
        Bienvenidos a Essen, cocina de autor con sabores tradicionales.
        Descubrí una experiencia culinaria única donde la pasión por los ingredientes se encuentra con la creatividad.
      </p>

      {/* Botón para ver el menú */}
      <button
        className="bg-amber-500 hover:bg-amber-800 text-white px-6 py-3 rounded-lg transition mb-8"
        onClick={() => navigate("/menu")}
      >
        Ver Menú
      </button>

      {/* Galería de imágenes */}
      <div className="max-w-6xl w-full mt-12">
        <h2 className="text-3xl font-bold mb-4">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src={restaurant1}
            alt="Restaurante 1"
            className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer"
            onClick={() => openImage(restaurant1)}
          />
          <img
            src={restaurant2}
            alt="Restaurante 2"
            className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer"
            onClick={() => openImage(restaurant2)}
          />
          <img
            src={restaurant3}
            alt="Restaurante 3"
            className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer"
            onClick={() => openImage(restaurant3)}
          />
        </div>
      </div>

      {/* Popup para la imagen seleccionada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={closeImage}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Contenedor de Ubicación y Reservas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full mt-12">
        {/* Ubicación */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ubicación</h2>
          <br />
          <p className="text-base text-gray-700 mb-4 font-bold">
            Pasaje Pereyra 1730, CABA
          </p>
          
          <br />
          <button
            className="bg-amber-500 hover:bg-amber-800 text-white px-6 py-3 rounded-lg transition text-lg"
            onClick={() =>
              (window.location.href =
                "https://www.google.com/maps/place/Pasaje+Pereyra+1730")
            }
          >
            Ver en Google Maps
          </button>
        </div>

        {/* Cómo hacer una reserva */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Reservas</h2>
          <p className="text-base text-gray-700 mb-4">
            Para realizar una reserva, llámanos al:
            <br />
            <span className="font-bold"> +34 123 456 789</span>
            <br />
            o envíanos un correo a:
            <span className="font-bold"> reservas@essen.com</span>
          </p>
          <button
            className="bg-amber-500 hover:bg-amber-800 text-white px-6 py-3 rounded-lg transition text-lg"
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send?phone=1158775695&text=Hola,%20me%20gustaría%20hacer%20una%20reserva.")
            }
          >
            Hacer una Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
