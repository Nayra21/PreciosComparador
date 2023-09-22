
const productos = [];


function guardarProducto() {
    const nombreProducto = document.querySelector('input[type="text"]').value;
    const precioProducto = parseFloat(document.querySelector('input[type="number"]').value);
    const nombreComercio = document.querySelector('input[type="text"]').value;


    if (!nombreProducto || isNaN(precioProducto) || precioProducto <= 0) {
        alert('Por favor, ingrese un nombre de producto válido y un precio válido.');
        return;
    }


    const producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        comercio: nombreComercio,
    };

   
    productos.push(producto);

  
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="number"]').value = '';

    
    alert('Producto guardado con éxito.');
}


function listarProductos() {
    const listaProductos = document.getElementById('lista');
    listaProductos.innerHTML = '<h3>Listado de Productos:</h3>';

    if (productos.length === 0) {
        listaProductos.innerHTML += '<p>No hay productos guardados.</p>';
    } else {
        const ul = document.createElement('ul');
        productos.forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Comercio: ${producto.comercio}`;
            ul.appendChild(li);
        });
        listaProductos.appendChild(ul);
    }
}


function productosMasBaratos() {
    const comparacionProductos = document.getElementById('comparacion');
    comparacionProductos.innerHTML = '<h3>Productos más Baratos:</h3>';

    if (productos.length === 0) {
        comparacionProductos.innerHTML += '<p>No hay productos guardados.</p>';
    } else {
      
        const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

        const ul = document.createElement('ul');
        productosOrdenados.slice(0, 5).forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Comercio: ${producto.comercio}`;
            ul.appendChild(li);
        });
        comparacionProductos.appendChild(ul);
    }
}

document.querySelector('#button button:nth-child(1)').addEventListener('click', guardarProducto);
document.querySelector('#button button:nth-child(2)').addEventListener('click', listarProductos);
document.querySelector('#button button:nth-child(3)').addEventListener('click', productosMasBaratos);
