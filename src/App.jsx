// import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contacto from './pages/Contacto'

import Productos from './pages/productos/Productos'
import Hombre from './pages/productos/Hombre'
import Mujer from './pages/productos/Mujer'

const App = () => {
  return (
    <div>

      {/* COMPONENTES GLOBALES */}
      <Header />
      <Navbar />

      {/* RUTAS */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/contacto" element={<Contacto />} />

        {/* RUTA PADRE */}
        <Route path="/productos" element={<Productos />}>

          {/* RUTAS ANIDADAS */}
          <Route path="hombre" element={<Hombre />} />
          <Route path="mujer" element={<Mujer />} />

        </Route>

      </Routes>

      <Footer />

    </div>
  )
}

export default App