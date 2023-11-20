import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { AgregarEmpleado } from "../empleados/AgregarEmpleado";
import { ListadoEmpleados } from "../empleados/ListadoEmpleados";
import { EditarEmpleado } from "../empleados/EditarEmpleado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ListadoEmpleados />,
      },
      {
        path: "/agregarEmpleado",
        element: <AgregarEmpleado />,
      },
      {
        path: "/editar/:id",
        element: <EditarEmpleado/>
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
