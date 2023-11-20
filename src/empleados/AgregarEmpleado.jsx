import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AgregarEmpleado = () => {

  const navigate = useNavigate();

  const [empleado, setEmpleado] = useState({nombre: '', departamento: '', sueldo: ''});

  const onChange = (e) => {
    const {value, name} = e.target;
    setEmpleado({
      ...empleado,
      [name]: value
    })    
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/rh-app/empleados', empleado);
    console.log(res);
    navigate('/')
  }

  return (
    <div>
      <h1>AgregarEmpleado</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder="nombre" name="nombre" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="">Departamento</label>
          <input type="text" placeholder="departamento" name="departamento" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="">Sueldo</label>
          <input type="text" placeholder="sueldo" name="sueldo" onChange={onChange}/>
        </div>
        <input type="submit" value="Agregar"/>
      </form>
    </div>
  );
};
