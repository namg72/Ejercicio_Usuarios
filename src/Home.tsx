import { DetalleUsuarios } from "./components/DetalleUsuarios";
import { ListaUsuarios } from "./components/ListaUsuarios";

export const Home = () => {
  return (
    <div className="flex flex-col p-8 min-h-screen">
      <div className="mt-8 text-center ">
        <h1>Explorador de Usuarios</h1>{" "}
      </div>
      <div className="flex flex-1 gap-4 mt-8">
        <div className="w-[70%]">
          <ListaUsuarios />
        </div>
        <div className="w-[30%]">
          <DetalleUsuarios />
        </div>
      </div>
    </div>
  );
};
