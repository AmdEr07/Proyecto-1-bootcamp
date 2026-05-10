// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================


// Selecciono el formulario completo de la página

const formulario = document.querySelector("form");


// Escucho el evento submit
// Esto ocurre cuando el usuario pulsa el botón enviar

formulario.addEventListener("submit", function (evento) {

  // Evito que el formulario se envíe automáticamente
  // para poder comprobar primero los datos

  evento.preventDefault();


  // Capturo los valores escritos por el usuario
  // trim() elimina espacios vacíos al principio y final

  const nombre = document.querySelector("#nombre").value.trim();

  const correo = document.querySelector("#correo").value.trim();

  const telefono = document.querySelector("#telefono").value.trim();

  const mensaje = document.querySelector("#mensaje").value.trim();


  // ===============================
  // VALIDACIONES
  // ===============================


  // Compruebo si el nombre está vacío

  if (nombre === "") {

    alert("Por favor, escribe tu nombre.");

    return;
  }


  // Compruebo si el correo está vacío

  if (correo === "") {

    alert("Por favor, escribe tu correo electrónico.");

    return;
  }


  // Compruebo si el correo incluye "@"
  // Si no lo tiene, el correo no es válido

  if (!correo.includes("@")) {

    alert("Por favor, escribe un correo válido.");

    return;
  }


  // Compruebo si el teléfono está vacío

  if (telefono === "") {

    alert("Por favor, escribe tu teléfono.");

    return;
  }


  // Compruebo si el mensaje está vacío

  if (mensaje === "") {

    alert("Por favor, escribe un mensaje.");

    return;
  }


  // Si todo está correcto muestro mensaje de éxito

  alert("Formulario enviado correctamente. ¡Gracias por contactar con ChocoDelicia!");


  // Limpio el formulario después del envío

  formulario.reset();

});