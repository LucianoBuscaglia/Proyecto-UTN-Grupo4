function mostrarFormulario() {
  document.getElementById("modal").style.display = "block";
}
function cerrarFormulario() {
  document.getElementById("modal").style.display = "none";
}

function cerrarInforme() {
  document.getElementById("informe").style.display = "none";
  document.getElementById("modal").style.display = "none";  // Ocultar el formulario
  currentStep = 1;  // Restablecer el paso actual al primero
  limpiarFormulario(); // Limpiar el formulario al cerrar el informe
  window.location.href = 'index.html';  // Redireccionar a index.html
}

function limpiarFormulario() {
  // Limpiar los valores ingresados en el formulario
  document.getElementById("nombreApellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = "";

 
}










let currentStep = 1;

function nextStep() {
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.style.display = "none";
  currentStep++;

  if (currentStep <= 3) {
      const nextStepElement = document.getElementById(`step${currentStep}`);
      nextStepElement.style.display = "block";
  } else {
      // Si hemos completado los 3 pasos, mostrar el informe
      mostrarInforme();
  }
}
function prevStep() {
  if (currentStep > 1) {
      const currentStepElement = document.getElementById(`step${currentStep}`);
      currentStepElement.style.display = "none";
      currentStep--;

      const prevStepElement = document.getElementById(`step${currentStep}`);
      prevStepElement.style.display = "block";
  }
}


function mostrarInforme() {
  const nombreApellido = document.getElementById("nombre_apellido").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  document.getElementById("informenombre_apellido").textContent = `Nombre y Apellido: ${nombreApellido}`;
  document.getElementById("informeEmail").textContent = `Email: ${email}`;
  document.getElementById("informeMensaje").textContent = `Mensaje: ${mensaje}`;

  document.getElementById("informe").style.display = "block";
}

function submitForm() {
  // Puedes enviar el formulario aquí si es necesario
  // Por ahora, simplemente pasamos al siguiente paso para mostrar el informe
  nextStep();
}
