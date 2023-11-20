import React, { useEffect, useState } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export const ListadoEmpleados = () => {
  const urlBase = "http://localhost:8080/rh-app";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const res = await axios.get(`${urlBase}/empleados`);
    setEmpleados(res.data);
  };

  const eliminarEmpleado = async (id) => {
    const res = await axios.delete(`${urlBase}/empleados/${id}`)
    console.log(res);
    cargarEmpleados()
  }

  return (
    <>
      <div className="container-empleados">
        <h3>Sistema de Recursos Humanos</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Empleado</th>
              <th>Departamente</th>
              <th>Sueldo</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.idEmpleado}>
                <th>{empleado.idEmpleado}</th>
                <th>{empleado.nombre}</th>
                <th>{empleado.departamento}</th>
                <th>
                  <NumericFormat
                    value={empleado.sueldo}
                    displayType="text"
                    thousandSeparator=","
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale
                  />{" "}
                </th>
                <th>
                  <Link to={`/editar/${empleado.idEmpleado}`}>Editar</Link>
                  <button onClick={()=> eliminarEmpleado(empleado.idEmpleado)}>Eliminar</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
