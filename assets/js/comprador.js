const productos = [
  {
    id: 1,
    nombre: "Eco-Cepillo Dental",
    descripcion:
      "Cepillo de bambú biodegradable con cerdas de carbón activado.",
    precio: 5.99,
    cantidad: 100,
    imagen: "../assets/img/Eco-CepilloDental.jpg",
  },
  {
    id: 2,
    nombre: "Botella de Agua Auto-Limpiable",
    descripcion: "Botella con luz UV integrada para purificar el agua.",
    precio: 29.99,
    cantidad: 50,
    imagen: "../assets/img/BotelladeAguaAuto-Limpiable.jpg",
  },
  {
    id: 3,
    nombre: "Pluma de Borrado Instantáneo",
    descripcion: "Pluma que borra tinta con un solo clic, sin dejar rastro.",
    precio: 9.99,
    cantidad: 200,
    imagen: "../assets/img/PlumadeBorradoInstantáneo.jpg",
  },
  {
    id: 4,
    nombre: "Mochila Solar Cargadora",
    descripcion:
      "Mochila con panel solar integrado para cargar dispositivos móviles.",
    precio: 79.99,
    cantidad: 25,
    imagen: "../assets/img/MochilaSolarCargadora.jpg",
  },
  {
    id: 5,
    nombre: "Audífonos de Traducción Simultánea",
    descripcion: "Audífonos que traducen idiomas en tiempo real.",
    precio: 149.99,
    cantidad: 10,
    imagen: "../assets/img/AudífonosdeTraducciónSimultánea_.jpg",
  },
  {
    id: 6,
    nombre: "Almohada de Masaje Inteligente",
    descripcion:
      "Almohada que se adapta a tu cuerpo y proporciona masajes personalizados.",
    precio: 69.99,
    cantidad: 30,
    imagen: "../assets/img/AlmohadadeMasajeInteligente.jpg",
  },
  {
    id: 7,
    nombre: "Lámpara de Escritorio con Carga Inalámbrica",
    descripcion: "Lámpara que carga tu teléfono mientras ilumina tu espacio.",
    precio: 49.99,
    cantidad: 40,
    imagen: "../assets/img/LámparadeEscritorioconCargaInalámbrica.jpg",
  },
  {
    id: 8,
    nombre: "Guantes de Realidad Virtual Táctiles",
    descripcion:
      "Guantes que te permiten sentir objetos en la realidad virtual.",
    precio: 199.99,
    cantidad: 5,
    imagen: "../assets/img/GuantesdeRealidadVirtualTáctiles.jpg",
  },
  {
    id: 9,
    nombre: "Cámara de Seguridad con Reconocimiento Facial",
    descripcion: "Cámara que identifica a las personas y envía alertas.",
    precio: 89.99,
    cantidad: 15,
    imagen: "../assets/img/CámaradeSeguridadconReconocimientoFacial.jpg",
  },
  {
    id: 10,
    nombre: "Robot Aspirador con Mapeo Inteligente",
    descripcion:
      "Aspirador que limpia tu casa de forma autónoma, creando mapas.",
    precio: 249.99,
    cantidad: 8,
    imagen: "../assets/img/RobotAspiradorconMapeoInteligente.jpg",
  },
  {
    id: 11,
    nombre: "Bicicleta Eléctrica Plegable",
    descripcion: "Bicicleta que se pliega para facilitar su transporte.",
    precio: 599.99,
    cantidad: 3,
    imagen: "../assets/img/BicicletaEléctricaPlegable.jpg",
  },
  {
    id: 12,
    nombre: "Reloj Inteligente con Monitor de Sueño",
    descripcion: "Reloj que analiza tu sueño y te ayuda a mejorarlo.",
    precio: 129.99,
    cantidad: 20,
    imagen: "../assets/img/RelojInteligenteconMonitordeSueño.jpg",
  },
  {
    id: 13,
    nombre: "Impresora 3D de Bolsillo",
    descripcion:
      "Impresora que cabe en tu bolsillo y te permite imprimir objetos pequeños.",
    precio: 349.99,
    cantidad: 2,
    imagen: "../assets/img/Impresora3DdeBolsillo.jpg",
  },
  {
    id: 14,
    nombre: "Kit de Cultivo Hidropónico Casero",
    descripcion: "Kit para cultivar tus propias hierbas y verduras en casa.",
    precio: 59.99,
    cantidad: 25,
    imagen: "../assets/img/KitdeCultivoHidropónicoCasero.jpg",
  },
  {
    id: 15,
    nombre: "Drone con Cámara 4K y Estabilización",
    descripcion: "Drone que graba videos y toma fotos de alta calidad.",
    precio: 499.99,
    cantidad: 6,
    imagen: "../assets/img/DroneconCámara4KyEstabilización.jpg",
  },
  {
    id: 16,
    nombre: "Proyector Holográfico Portátil",
    descripcion: "Proyector que crea hologramas en cualquier superficie.",
    precio: 299.99,
    cantidad: 12,
    imagen: "../assets/img/ProyectorHolográficoPortátil.jpg",
  },
  {
    id: 17,
    nombre: "Mesa de Escritorio Ajustable con Memoria",
    descripcion:
      "Mesa que se ajusta a tu altura y guarda tus posiciones favoritas.",
    precio: 399.99,
    cantidad: 4,
    imagen: "../assets/img/MesadeEscritorioAjustableconMemoria.jpg",
  },
  {
    id: 18,
    nombre: "Silla Ergonómica con Calefacción",
    descripcion: "Silla que se adapta a tu cuerpo y te mantiene caliente.",
    precio: 279.99,
    cantidad: 9,
    imagen: "../assets/img/SillaErgonómicaconCalefacción.jpg",
  },
  {
    id: 19,
    nombre: "Purificador de Aire con Aromaterapia",
    descripcion:
      "Purificador que elimina las impurezas del aire y libera aromas.",
    precio: 119.99,
    cantidad: 18,
    imagen: "../assets/img/PurificadordeAireconAromaterapia.jpg",
  },
  {
    id: 20,
    nombre: "Altavoz Inteligente con Pantalla Táctil",
    descripcion: "Altavoz que te permite controlar tu hogar y ver videos.",
    precio: 169.99,
    cantidad: 11,
    imagen: "../assets/img/AltavozInteligenteconPantallaTáctil.jpg",
  },
  {
    id: 21,
    nombre: "Gafas de Realidad Aumentada con GPS",
    descripcion: "Gafas que te muestran información sobre el mundo real.",
    precio: 229.99,
    cantidad: 7,
    imagen: "../assets/img/GafasdeRealidadAumentadaconGPS.jpg",
  },
  {
    id: 22,
    nombre: "Maleta Inteligente con Seguimiento GPS",
    descripcion: "Maleta que te permite saber dónde está en todo momento.",
    precio: 189.99,
    cantidad: 13,
    imagen: "../assets/img/MaletaInteligenteconSeguimientoGPS.jpg",
  },
  {
    id: 23,
    nombre: "Cargador Solar Portátil para Laptop",
    descripcion: "Cargador que te permite cargar tu laptop en cualquier lugar.",
    precio: 139.99,
    cantidad: 17,
    imagen: "../assets/img/PlumadeBorradoInstantáneo.jpg",
  },
  {
    id: 24,
    nombre: "Teclado Virtual Proyectado",
    descripcion: "Teclado que se proyecta en cualquier superficie.",
    precio: 99.99,
    cantidad: 22,
    imagen: "../assets/img/TecladoVirtualProyectado.jpg",
  },
  {
    id: 25,
    nombre: "Ratón Ergonómico con Escáner",
    descripcion: "Ratón que escanea documentos y los convierte en texto.",
    precio: 79.99,
    cantidad: 28,
    imagen: "../assets/img/RatónErgonómicoconEscáner.jpg",
  },
  {
    id: 26,
    nombre: "Libreta Inteligente con Digitalización",
    descripcion: "Libreta que digitaliza tus notas y dibujos.",
    precio: 69.99,
    cantidad: 32,
    imagen: "../assets/img/LibretaInteligenteconDigitalización.jpg",
  },
  {
    id: 27,
    nombre: "Traductor de Idiomas de Bolsillo",
    descripcion: "Dispositivo que traduce idiomas en tiempo real.",
    precio: 149.99,
    cantidad: 10,
    imagen: "../assets/img/TraductordeIdiomasdeBolsillo.jpg",
  },
  {
    id: 28,
    nombre: "Medidor de Calidad del Aire Portátil",
    descripcion: "Dispositivo que mide la calidad del aire y te alerta.",
    precio: 89.99,
    cantidad: 15,
    imagen: "../assets/img/MedidordeCalidaddelAirePortátil.jpg",
  },
  {
    id: 29,
    nombre: "Báscula Inteligente con Análisis Corporal",
    descripcion:
      "Báscula que analiza tu composición corporal y te da consejos.",
    precio: 129.99,
    cantidad: 20,
    imagen: "../assets/img/BásculaInteligenteconAnálisisCorporal.jpg",
  },
  {
    id: 30,
    nombre: "Dispensador de Comida Inteligente para Mascotas",
    descripcion: "Dispositivo que alimenta a tu mascota automáticamente.",
    precio: 169.99,
    cantidad: 11,
    imagen: "../assets/img/DispensadordeComidaInteligenteparaMascotas.jpg",
  },
  {
    id: 31,
    nombre: "Termómetro Inteligente sin Contacto",
    descripcion: "Termómetro que mide la temperatura sin tocar la piel.",
    precio: 59.99,
    cantidad: 25,
    imagen: "../assets/img/TermómetroInteligentesinContacto.jpg",
  },
  {
    id: 32,
    nombre: "Kit de Primeros Auxilios Inteligente",
    descripcion: "Kit que te guía en caso de emergencia.",
    precio: 79.99,
    cantidad: 28,
    imagen: "../assets/img/KitdePrimerosAuxiliosInteligente.jpg",
  },
  {
    id: 33,
    nombre: "Candado Inteligente con Huella Dactilar",
    descripcion: "Candado que se abre con tu huella dactilar.",
    precio: 49.99,
    cantidad: 30,
    imagen: "../assets/img/CandadoInteligenteconHuellaDactilar.jpg",
  },
];

const carrito = [];

function renderizarProductos() {
  const contenedor = document.querySelector(".productos");
  contenedor.innerHTML = productos
    .map(
      (producto) => `
          <div class="producto">
              <img src="${producto.imagen || "default-image.jpg"}" alt="${
        producto.nombre
      }">
              <h3>${producto.nombre}</h3>
              <p>${producto.descripcion}</p>
              <p>Precio: $${producto.precio.toFixed(2)}</p>
              <p>Cantidad disponible: ${producto.cantidad}</p>
              <button onclick="añadirAlCarrito(${
                producto.id
              })">Añadir al carrito</button>
          </div>
      `
    )
    .join("");
}

function añadirAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (producto.cantidad > 0) {
    carrito.push(producto);
    producto.cantidad--; // Reducir la cantidad disponible
    actualizarCarrito();
  } else {
    alert("No hay suficiente stock de este producto.");
  }
}

function quitarDelCarrito(id) {
  const index = carrito.findIndex((producto) => producto.id === id);
  if (index !== -1) {
    const producto = carrito[index];
    producto.cantidad++; // Aumentar la cantidad disponible
    carrito.splice(index, 1); // Eliminar el producto del carrito
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalProductos = document.getElementById("total-productos");
  const totalPrecio = document.getElementById("total-precio");

  // Limpiar la lista del carrito
  lista.innerHTML = carrito
    .map(
      (producto) => `
          <li>
              ${producto.nombre} - $${producto.precio.toFixed(2)}
              <button onclick="quitarDelCarrito(${producto.id})">Quitar</button>
          </li>
      `
    )
    .join("");

  // Actualizar el total de productos
  totalProductos.textContent = carrito.length;

  // Calcular y actualizar el total del precio
  const sumaTotal = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );
  totalPrecio.textContent = `$${sumaTotal.toFixed(2)}`;
}

// Cerrar sesión
document.getElementById("cerrar-sesion").addEventListener("click", () => {
  localStorage.removeItem("usuario");
  localStorage.removeItem("rol");
  window.location.href = "../index.html";
});

// Inicializar
renderizarProductos();
