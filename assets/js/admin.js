const usuarios = [
  { id: 1, nombre: "Usuario 1", rol: "comprador" },
  { id: 2, nombre: "Usuario 2", rol: "vendedor" },
  { id: 3, nombre: "Usuario 3", rol: "admin" }, // Tercer usuario
];

const productos = [
  {
    id: 1,
    nombre: "Eco-Cepillo Dental",
    descripcion:
      "Cepillo de bambú biodegradable con cerdas de carbón activado.",
    precio: 5.99,
    cantidad: 100,
    imagen: "../assets/img/1.jpg",
  },
  {
    id: 2,
    nombre: "Botella de Agua Auto-Limpiable",
    descripcion: "Botella con luz UV integrada para purificar el agua.",
    precio: 29.99,
    cantidad: 50,
    imagen: "../assets/img/2.jpg",
  },
  {
    id: 3,
    nombre: "Pluma de Borrado Instantáneo",
    descripcion: "Pluma que borra tinta con un solo clic, sin dejar rastro.",
    precio: 9.99,
    cantidad: 200,
    imagen: "../assets/img/3.jpg",
  },
  {
    id: 4,
    nombre: "Mochila Solar Cargadora",
    descripcion:
      "Mochila con panel solar integrado para cargar dispositivos móviles.",
    precio: 79.99,
    cantidad: 25,
    imagen: undefined,
  },
  {
    id: 5,
    nombre: "Audífonos de Traducción Simultánea",
    descripcion: "Audífonos que traducen idiomas en tiempo real.",
    precio: 149.99,
    cantidad: 10,
    imagen: undefined,
  },
  {
    id: 6,
    nombre: "Almohada de Masaje Inteligente",
    descripcion:
      "Almohada que se adapta a tu cuerpo y proporciona masajes personalizados.",
    precio: 69.99,
    cantidad: 30,
    imagen: undefined,
  },
  {
    id: 7,
    nombre: "Lámpara de Escritorio con Carga Inalámbrica",
    descripcion: "Lámpara que carga tu teléfono mientras ilumina tu espacio.",
    precio: 49.99,
    cantidad: 40,
    imagen: undefined,
  },
  {
    id: 8,
    nombre: "Guantes de Realidad Virtual Táctiles",
    descripcion:
      "Guantes que te permiten sentir objetos en la realidad virtual.",
    precio: 199.99,
    cantidad: 5,
    imagen: undefined,
  },
  {
    id: 9,
    nombre: "Cámara de Seguridad con Reconocimiento Facial",
    descripcion: "Cámara que identifica a las personas y envía alertas.",
    precio: 89.99,
    cantidad: 15,
    imagen: undefined,
  },
  {
    id: 10,
    nombre: "Robot Aspirador con Mapeo Inteligente",
    descripcion:
      "Aspirador que limpia tu casa de forma autónoma, creando mapas.",
    precio: 249.99,
    cantidad: 8,
    imagen: undefined,
  },
  {
    id: 11,
    nombre: "Bicicleta Eléctrica Plegable",
    descripcion: "Bicicleta que se pliega para facilitar su transporte.",
    precio: 599.99,
    cantidad: 3,
    imagen: undefined,
  },
  {
    id: 12,
    nombre: "Reloj Inteligente con Monitor de Sueño",
    descripcion: "Reloj que analiza tu sueño y te ayuda a mejorarlo.",
    precio: 129.99,
    cantidad: 20,
    imagen: undefined,
  },
  {
    id: 13,
    nombre: "Impresora 3D de Bolsillo",
    descripcion:
      "Impresora que cabe en tu bolsillo y te permite imprimir objetos pequeños.",
    precio: 349.99,
    cantidad: 2,
    imagen: undefined,
  },
  {
    id: 14,
    nombre: "Kit de Cultivo Hidropónico Casero",
    descripcion: "Kit para cultivar tus propias hierbas y verduras en casa.",
    precio: 59.99,
    cantidad: 25,
    imagen: undefined,
  },
  {
    id: 15,
    nombre: "Drone con Cámara 4K y Estabilización",
    descripcion: "Drone que graba videos y toma fotos de alta calidad.",
    precio: 499.99,
    cantidad: 6,
    imagen: undefined,
  },
  {
    id: 16,
    nombre: "Proyector Holográfico Portátil",
    descripcion: "Proyector que crea hologramas en cualquier superficie.",
    precio: 299.99,
    cantidad: 12,
    imagen: undefined,
  },
  {
    id: 17,
    nombre: "Mesa de Escritorio Ajustable con Memoria",
    descripcion:
      "Mesa que se ajusta a tu altura y guarda tus posiciones favoritas.",
    precio: 399.99,
    cantidad: 4,
    imagen: undefined,
  },
  {
    id: 18,
    nombre: "Silla Ergonómica con Calefacción",
    descripcion: "Silla que se adapta a tu cuerpo y te mantiene caliente.",
    precio: 279.99,
    cantidad: 9,
    imagen: undefined,
  },
  {
    id: 19,
    nombre: "Purificador de Aire con Aromaterapia",
    descripcion:
      "Purificador que elimina las impurezas del aire y libera aromas.",
    precio: 119.99,
    cantidad: 18,
    imagen: undefined,
  },
  {
    id: 20,
    nombre: "Altavoz Inteligente con Pantalla Táctil",
    descripcion: "Altavoz que te permite controlar tu hogar y ver videos.",
    precio: 169.99,
    cantidad: 11,
    imagen: undefined,
  },
  {
    id: 21,
    nombre: "Gafas de Realidad Aumentada con GPS",
    descripcion: "Gafas que te muestran información sobre el mundo real.",
    precio: 229.99,
    cantidad: 7,
    imagen: undefined,
  },
  {
    id: 22,
    nombre: "Maleta Inteligente con Seguimiento GPS",
    descripcion: "Maleta que te permite saber dónde está en todo momento.",
    precio: 189.99,
    cantidad: 13,
    imagen: undefined,
  },
  {
    id: 23,
    nombre: "Cargador Solar Portátil para Laptop",
    descripcion: "Cargador que te permite cargar tu laptop en cualquier lugar.",
    precio: 139.99,
    cantidad: 17,
    imagen: undefined,
  },
  {
    id: 24,
    nombre: "Teclado Virtual Proyectado",
    descripcion: "Teclado que se proyecta en cualquier superficie.",
    precio: 99.99,
    cantidad: 22,
    imagen: undefined,
  },
  {
    id: 25,
    nombre: "Ratón Ergonómico con Escáner",
    descripcion: "Ratón que escanea documentos y los convierte en texto.",
    precio: 79.99,
    cantidad: 28,
    imagen: undefined,
  },
  {
    id: 26,
    nombre: "Libreta Inteligente con Digitalización",
    descripcion: "Libreta que digitaliza tus notas y dibujos.",
    precio: 69.99,
    cantidad: 32,
    imagen: undefined,
  },
  {
    id: 27,
    nombre: "Traductor de Idiomas de Bolsillo",
    descripcion: "Dispositivo que traduce idiomas en tiempo real.",
    precio: 149.99,
    cantidad: 10,
    imagen: undefined,
  },
  {
    id: 28,
    nombre: "Medidor de Calidad del Aire Portátil",
    descripcion: "Dispositivo que mide la calidad del aire y te alerta.",
    precio: 89.99,
    cantidad: 15,
    imagen: undefined,
  },
  {
    id: 29,
    nombre: "Báscula Inteligente con Análisis Corporal",
    descripcion:
      "Báscula que analiza tu composición corporal y te da consejos.",
    precio: 129.99,
    cantidad: 20,
    imagen: undefined,
  },
  {
    id: 30,
    nombre: "Dispensador de Comida Inteligente para Mascotas",
    descripcion: "Dispositivo que alimenta a tu mascota automáticamente.",
    precio: 169.99,
    cantidad: 11,
    imagen: undefined,
  },
  {
    id: 31,
    nombre: "Termómetro Inteligente sin Contacto",
    descripcion: "Termómetro que mide la temperatura sin tocar la piel.",
    precio: 59.99,
    cantidad: 25,
    imagen: undefined,
  },
  {
    id: 32,
    nombre: "Kit de Primeros Auxilios Inteligente",
    descripcion: "Kit que te guía en caso de emergencia.",
    precio: 79.99,
    cantidad: 28,
    imagen: undefined,
  },
  {
    id: 33,
    nombre: "Candado Inteligente con Huella Dactilar",
    descripcion: "Candado que se abre con tu huella dactilar.",
    precio: 49.99,
    cantidad: 30,
    imagen: undefined,
  },
];

function renderizarUsuarios() {
  const lista = document.querySelector("#lista-usuarios ul");
  lista.innerHTML = usuarios
    .map(
      (usuario) => `
            <li>
                ${usuario.nombre} (${usuario.rol}) 
                <button class="eliminar" onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
            </li>
        `
    )
    .join("");
}

function renderizarProductos() {
  const lista = document.querySelector("#lista-productos ul");
  lista.innerHTML = productos
    .map(
      (producto) => `
            <li>
                ${producto.nombre} - $${producto.precio} (Cargado por: ${producto.usuario})
                <button class="eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </li>
        `
    )
    .join("");
}

function eliminarUsuario(id) {
  const index = usuarios.findIndex((u) => u.id === id);
  if (index !== -1) {
    usuarios.splice(index, 1); // Elimina el usuario del array
    renderizarUsuarios();
  }
}

function eliminarProducto(id) {
  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1); // Elimina el producto del array
    renderizarProductos();
  }
}

// Cerrar sesión
document.getElementById("cerrar-sesion").addEventListener("click", () => {
  localStorage.removeItem("usuario");
  localStorage.removeItem("rol");
  window.location.href = "../index.html";
});

// Inicializar
renderizarUsuarios();
renderizarProductos();
