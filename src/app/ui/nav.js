import Link from "next/link"
import './ui.css'
import { lobster } from "./fonts"


const links = [
    {name: 'Inicio', ruta: '/'},
    {name: 'Menu', ruta: '/menu'},
    {name: 'Contacto', ruta: '/contacto'},
]

export default function Nav(){
    return(
        <nav className="navigate-nav">
            <ul className="navigate-ul">
                {links.map(e => (
                    <li className="navigate-li" >
                        <Link key={e.name} className={`navigate-link ${lobster.className}`} href={e.ruta}>{e.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}