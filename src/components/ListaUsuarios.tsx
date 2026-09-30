import { TarjetaUsuario } from "./TarjetaUsuario";

export const ListaUsuarios = () => {
  return (
    <div className="rounded shadow-2xl p-2 h-full">
      <p>Lista de usuarios</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TarjetaUsuario />
        <TarjetaUsuario />
        <TarjetaUsuario />
        <TarjetaUsuario />
      </div>
    </div>
  );
};
