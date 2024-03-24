'use client'
import { useEffect, useState } from "react"
import { lobster } from "./fonts"
import './ui.css'
import { Productos } from "./Productos"
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation"

const opciones = [
  {name: 'Pizzas', active: true},
  {name: 'Combos', active: false},
  {name: 'Entradas', active: false},
  {name: 'Bebidas', active: false},
]


const useCategorias = (opciones)=>{
  const [categorias, setCategorias] = useState(opciones)

  const changeActive = (name) =>{

    const updatedCategorias = opciones.map(option => ({
      ...option,
      active: option.name === name
    }));
    setCategorias(updatedCategorias);

  }

  

  return { changeActive, categorias }
}



export function Pagination(){
  
  const {changeActive, categorias} = useCategorias(opciones)

  const router = useRouter();
  const rutaActual = usePathname();
  const categoria = categorias.filter(e => e.active)

  useEffect(() => {
    router.push(`${rutaActual}/?categoria=${categoria[0].name}`);
  }, [categorias]);

return(
    <>
      <div className="paginationContainer">
      {categorias.map(e => (
                    <p onClick={()=>{changeActive(e.name)}} 
                    key={e.name} 
                    className={`${e.active ? 'active' : ''} paginationElement ${lobster.className}`}
                    >{e.name}</p>
                ))}
      </div>
    </>
  )
}
