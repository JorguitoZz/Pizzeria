import Image from 'next/image'
import './ui.css'
import { lobster, montserrat} from "./fonts"
import { productosSimple } from "../data/data";


export async function  Producto() {

    const productos = await productosSimple()

    console.log(productos)

    return(
        <>
            {
                productos.map(producto => (
                    <div className='containerProductos' key={producto.id}>
                        <div className='containerProducto'>
                            <Image
                                src={producto.img_url}
                                width={200}
                                height={200}
                                className='productoImg'
                            />
                            <h2 className={`productoTitle ${lobster.className}`}>{producto.nombre}</h2>
                            <p className={`productoDescripcion ${montserrat.className}`}>{producto.descripcion_corta}</p>
                            <div className='productoFooter'>
                                <p className={`productoPrecio ${lobster.className}`}>{producto.precio}</p>
                                <button className={`productoBoton ${lobster.className}`}>Ordenar</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

