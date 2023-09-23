// Array para almacenar los productos
let productos = [];
let productosBaratos = [];

// Función para agregar un producto al array
function agregarProducto() {

  // Obtener los valores del nombre, precio y supermercado desde el formulario
  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const supermercado = document.getElementById('supermercado').value;

    // Verificar si los campos están completos y el precio es un número válido
  if (nombre && !isNaN(precio) && supermercado) {

    // Crear un objeto producto y agregarlo al array de productos
    const producto = {
      nombre: nombre,
      precio: precio,
      supermercado: supermercado,
    };

    productos.push(producto);

    // Crear un elemento <li> para mostrar la información del producto y agregarlo a la lista de productos
    const elementoDeListaDeProductos = document.createElement('li');
    elementoDeListaDeProductos.textContent = `${nombre} - ${precio} - ${supermercado}`;
    document.getElementById('lista-de-productos').appendChild(elementoDeListaDeProductos);

    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('supermercado').value = '';

    alert('Producto agregado exitosamente.');
  } else {
    alert('Por favor, complete todos los campos correctamente.');
  }
}

// Función para comparar precios
function compararPrecios() {
  if (productos.length > 0) {
    productosBaratos = [];

    for (const producto of productos) {
      const productoExistente = productosBaratos.find(p => p.nombre === producto.nombre);

      if (!productoExistente || producto.precio < productoExistente.precio) {
        productosBaratos = productosBaratos.filter(p => p.nombre !== producto.nombre);
        productosBaratos.push(producto);
      }
    }

    // Limpiar la lista de productos baratos y agregar los productos más baratos
    document.getElementById('lista-de-productos-baratos').innerHTML = '';
    for (const producto of productosBaratos) {
      const elementoDeListaDeProductosBaratos = document.createElement('li');
      elementoDeListaDeProductosBaratos.textContent = `${producto.nombre} - ${producto.precio} - ${producto.supermercado}`;
      document.getElementById('lista-de-productos-baratos').appendChild(elementoDeListaDeProductosBaratos);
    }
  }
}
