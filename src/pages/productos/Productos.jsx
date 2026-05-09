// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Productos = () => {
    return (
        <div>
            <h1>Productos</h1>

            <nav>
                <Link to="hombre">Hombre</Link> 
                <Link to="mujer">Mujer</Link>
            </nav>

            {/* Aquí se muestran las rutas hijas */}
            <Outlet />
        </div>
    )
}

export default Productos