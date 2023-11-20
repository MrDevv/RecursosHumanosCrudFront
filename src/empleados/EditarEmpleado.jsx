import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EditarEmpleado = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const { nombre, departamento, sueldo } = empleado;

  useEffect(() => {
    cargarEmpleado(id);
  }, []);

  const cargarEmpleado = async () => {
    const res = await axios.get(`http://localhost:8080/rh-app/empleados/${id}`);
    setEmpleado(res.data);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setEmpleado({
      ...empleado,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8080/rh-app/empleados/${id}`,
        empleado
      );
      console.log(res);
      navigate("/");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <h1>AgregarEmpleado</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Departamento</label>
          <input
            type="text"
            placeholder="departamento"
            name="departamento"
            value={departamento}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">Sueldo</label>
          <input
            type="text"
            placeholder="sueldo"
            name="sueldo"
            value={sueldo}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Editar" />
      </form>
    </div>
  );
};
