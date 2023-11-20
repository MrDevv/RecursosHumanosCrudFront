import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AgregarEmpleado } from "./empleados/AgregarEmpleado";
import { ListadoEmpleados } from "./empleados/ListadoEmpleados";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
