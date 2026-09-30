import { IconoUbicacion } from "./icons/IconoUbicacion";

export const TarjetaUsuario = () => {
  return (
    <div className="rounded shadow p-2 relative">
      <button
        type="button"
        aria-label="Añadir a favoritos"
        className="absolute right-2 top-1 cursor-pointer text-xl text-slate-400"
      >
        ☆
      </button>
      <div className="flex gap-2">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
          LG
        </div>

        <div className="min-w-0 flex-1">
          <p className="pr-6 text-base font-semibold text-slate-900">Nombre Usuario</p>
          <p className="mt-1 break-words text-sm text-slate-500">usuario@ejemplo.com</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <IconoUbicacion />
            Ciudad
          </p>

          <div className="mt-4 flex justify-end text-sm font-medium text-blue-700">
            <button>Ver detalle →</button>
          </div>
        </div>
      </div>
    </div>
  );
};
