
export function Productos({ categorias }) {

    const categoriaActiva = categorias.find(categoria => categoria.active);
  

    return(
        <>
            {categoriaActiva.name === 'Pizzas'  && <p>Pizza</p>}
            {categoriaActiva.name === 'Combos' && <p>Combos</p>}
            {categoriaActiva.name === 'Entradas' && <p>Entradas</p>}
            {categoriaActiva.name === 'Bebidas' && <p>Bebidas</p>}
        </>
    )
}