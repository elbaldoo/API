import { Routes, Route } from "react-router-dom"
import MenuPage from "./components/Menu"
import About from "./components/About"
import Layout from "./components/Layout"
import AdminDashboard from "./components/Admin/AdminDashboard"; // Importa el módulo de administración
import { useState } from "react"
import { menuData } from "./data/menuData.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // TailwindCSS

function App() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubcategory, setActiveSubcategory] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route
          path="menu"
          element={
            <MenuPage
              menuData={menuData}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeSubcategory={activeSubcategory}
              setActiveSubcategory={setActiveSubcategory}
            />
          }
        />
      </Route>
      <Route path="/admin/*" element={<AdminDashboard />} /> {/* Ruta para el módulo de administración */}
    </Routes>
  )
}

export default App
