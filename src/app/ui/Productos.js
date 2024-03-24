import { Producto } from "./Producto";

export function Productos({ categoria }) {
    // ... Renderiza la lista de productos filtrada por categoría
    return (
      <div>
        <h1>{categoria}</h1>
        <Producto />
      </div>
    );
  }