import React, { Fragment, useState } from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import './components/styles.css';

function App() {

  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'cosa1', precio: 11},
    {id: 2, nombre: 'cosa2', precio: 45},
    {id: 3, nombre: 'cosa3', precio: 365},
    {id: 4, nombre: 'cosa4', precio: 78},
    {id: 5, nombre: 'cosa5', precio: 789},
    {id: 6, nombre: 'cosa6', precio: 654},
  ]);

  const [ carrito, agregarProducto  ] = useState([]);

  return (
    <Fragment>
        <h1>Productos</h1>
        {productos.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}

        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />
    </Fragment>
  );
}

export default App;
