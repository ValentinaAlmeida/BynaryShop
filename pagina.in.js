const usuarios = {
  COMPRADOR: { usuario: "seller456", contrasena: "Intro123", rol: "comprador" },
  VENDEDOR: {
    usuario: "dancabello",
    contrasena: "J5*asdRD.s",
    rol: "vendedor",
  },
  ADMIN: { usuario: "root", contrasena: "dochouse", rol: "admin" },
};

function validarCredenciales(usuario, contrasena) {
  for (const key in usuarios) {
    if (
      usuarios[key].usuario === usuario &&
      usuarios[key].contrasena === contrasena
    ) {
      return usuarios[key].rol;
    }
  }
  return null;
}

function iniciarSesion(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const usuario = document.querySelector('input[type="text"]').value;
  const contrasena = document.querySelector('input[type="password"]').value;

  const rol = validarCredenciales(usuario, contrasena);

  if (rol) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("rol", rol);

    // Redirigir según el rol
    switch (rol) {
      case "comprador":
        window.location.href = "menu/comprador.html";
        break;
      case "vendedor":
        window.location.href = "menu/vendedor.html";
        break;
      case "admin":
        window.location.href = "menu/admin.html";
        break;
      default:
        alert("Rol no válido.");
        break;
    }
  } else {
    alert("Credenciales incorrectas.");
  }
}

// Conectar la función al formulario
document.querySelector("form").addEventListener("submit", iniciarSesion);
