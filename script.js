// Nombres y apellidos: [Antonio E. Cantó Álvarez]
// ============================================================
// SCRIPT DEL PROYECTO FINAL - Cafetería Girasol
// ============================================================

// ============================================================
// 1. MENÚ HAMBURGUESA (toggle en móvil)
// ============================================================
const menuToggle = document.getElementById('menu-toggle');
const navegacion = document.getElementById('navegacion');

function toggleMenu() {
  const estaAbierta = navegacion.classList.toggle('abierta');
  menuToggle.setAttribute('aria-expanded', estaAbierta);
  menuToggle.textContent = estaAbierta ? '✕ Cerrar' : '☰ Menú';
}

menuToggle.addEventListener('click', toggleMenu);

// Cerrar menú al hacer clic en un enlace (mejora UX en móvil)
navegacion.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth < 768) {
    // Si es un enlace y estamos en móvil, cerramos el menú
    navegacion.classList.remove('abierta');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰ Menú';
  }
});

// ============================================================
// 2. FORMULARIO DE CONTACTO - VALIDACIÓN CAMPO A CAMPO
// ============================================================
const formulario = document.getElementById('formulario-contacto');
const confirmacionDiv = document.getElementById('confirmacion');

// Elementos de los campos
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// Contenedores de errores
const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorMensaje = document.getElementById('error-mensaje');

// Función para limpiar errores
function limpiarErrores() {
  errorNombre.textContent = '';
  errorEmail.textContent = '';
  errorMensaje.textContent = '';
  nombreInput.classList.remove('error');
  emailInput.classList.remove('error');
  mensajeInput.classList.remove('error');
}

// Función para validar el nombre (no vacío)
function validarNombre(nombre) {
  return nombre.trim().length > 0;
}

// Función para validar email (contiene @)
function validarEmail(email) {
  return email.includes('@') && email.trim().length > 0;
}

// Función para validar mensaje (mínimo 10 caracteres)
function validarMensaje(mensaje) {
  return mensaje.trim().length >= 10;
}

// Manejo del envío del formulario
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evitamos recarga de página

  // Limpiamos errores anteriores
  limpiarErrores();
  confirmacionDiv.classList.remove('visible');
  confirmacionDiv.style.display = 'none';

  // Leemos valores
  const nombre = nombreInput.value;
  const email = emailInput.value;
  const mensaje = mensajeInput.value;

  let formularioValido = true;

  // Validar nombre
  if (!validarNombre(nombre)) {
    errorNombre.textContent = 'Por favor, escribe tu nombre completo.';
    nombreInput.classList.add('error');
    formularioValido = false;
  }

  // Validar email
  if (!validarEmail(email)) {
    errorEmail.textContent = 'Por favor, escribe un correo válido (debe contener @).';
    emailInput.classList.add('error');
    formularioValido = false;
  }

  // Validar mensaje
  if (!validarMensaje(mensaje)) {
    errorMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres.';
    mensajeInput.classList.add('error');
    formularioValido = false;
  }

  // Si todo es válido, mostramos confirmación
  if (formularioValido) {
    confirmacionDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente. Te responderemos pronto.`;
    confirmacionDiv.style.display = 'block';
    confirmacionDiv.classList.add('visible');
    // Opcional: resetear el formulario
    formulario.reset();
    // Opcional: quitar clases de error si las hubiera
    limpiarErrores();
  }
});

// ============================================================
// 3. (OPCIONAL) Mejora: limpiar errores al escribir
// ============================================================
nombreInput.addEventListener('input', function() {
  if (this.classList.contains('error')) {
    errorNombre.textContent = '';
    this.classList.remove('error');
  }
});
emailInput.addEventListener('input', function() {
  if (this.classList.contains('error')) {
    errorEmail.textContent = '';
    this.classList.remove('error');
  }
});
mensajeInput.addEventListener('input', function() {
  if (this.classList.contains('error')) {
    errorMensaje.textContent = '';
    this.classList.remove('error');
  }
});