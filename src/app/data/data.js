import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
// Importa la definición Producto
import { Producto } from './definiciones';

export async function productosSimple() {
    noStore();

    try {
        // Ejecuta la consulta SQL para obtener los productos
        const data = await sql`
            SELECT id, name, descripcion_corta, precio, img_url
            FROM productos
        `;

        // Mapea los resultados de la consulta a objetos Producto
        const productosSimple = data.rows.map(producto => ({
            id: producto.id,
            nombre: producto.name,
            descripcion_corta: producto.descripcion_corta,
            img_url: producto.img_url,
            precio: producto.precio
        }));

        // Devuelve la lista de productos
        return productosSimple;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener productos simples.');
    }
}
