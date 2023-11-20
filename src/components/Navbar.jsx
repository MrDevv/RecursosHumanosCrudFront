import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1>
          <Link to={"/"}>Sistema Recursos Humanos</Link>
        </h1>
        <nav className="menu">
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/agregarEmpleado"}>Agregar Empleado</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
