import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => ( 
    <div className="carrito">
        <h2>Carrito</h2>

        {carrito.length === 0 
            ? <p>Carrito vacío</p>
            
            : carrito.map(producto => (
            
                <Producto 
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
            )) 
        }
    </div>

);
 
export default Carrito;