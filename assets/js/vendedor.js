const productosCargados = [];

document
  .getElementById("formulario-producto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").files[0];

    if (nombre && precio && imagen) {
      const producto = {
        id: Date.now(), // ID único basado en la fecha
        nombre,
        precio,
        imagen: URL.createObjectURL(imagen), // Crear una URL para la imagen
      };

      productosCargados.push(producto);
      renderizarProductos();
      alert("Producto añadido correctamente.");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });

function renderizarProductos() {
  const lista = document.querySelector("#lista-productos ul");
  lista.innerHTML = productosCargados
    .map(
      (producto) => `
                <li>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <span>${producto.nombre} - $${producto.precio}</span>
                </li>
            `
    )
    .join("");
}

// Cerrar sesión
document.getElementById("cerrar-sesion").addEventListener("click", () => {
  localStorage.removeItem("usuario");
  localStorage.removeItem("rol");
  window.location.href = "../index.html";
});

// Inicializar
renderizarProductos();
