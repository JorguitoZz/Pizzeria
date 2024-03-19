'use client'
import { useState } from "react"
import { lobster } from "./fonts"
import './ui.css'
import { Productos } from "./Productos"

const opciones = [
  {name: 'Pizzas', active: true},
  {name: 'Combos', active: false},
  {name: 'Entradas', active: false},
  {name: 'Bebidas', active: false},
]


export function Pagination(){

  const [categorias, setCategorias] = useState(opciones)

  const changeActive = (name) =>{

    const updatedCategorias = opciones.map(option => ({
      ...option,
      active: option.name === name
    }));
    setCategorias(updatedCategorias);

  }


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
      <div>
        <Productos categorias={categorias}/>
      </div>
    </>
  )
}